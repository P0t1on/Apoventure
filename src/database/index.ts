import { get, writable, type Writable } from 'svelte/store';

type DatabaseFileType = 'json';

type DatabaseServiceType = {
  name: string;
  database(
    id: string,
    saveOnCommit?: boolean,
    type?: DatabaseFileType
  ): DatabaseType;
};

type DatabaseType = {
  readonly id: string;
  readonly saveOnCommit: Writable<boolean>;
  readonly type: DatabaseFileType;
  readonly separator: string;
  get<T>(id: string): Writable<T>;
  save(): void;
};

type TableType<T> = {
  readonly constructor: (id: string) => T;
} & ((database: DatabaseType) => BoundTableType<T>);

type BoundTableType<T> = {
  readonly constructor: (id: string) => T;
};

export function createDatabaseService(
  name: string,
  separator: '/' = '/'
): DatabaseServiceType {
  function createDatabase(
    id: string,
    saveOnUpdate: boolean = false,
    type: DatabaseFileType = 'json'
  ): DatabaseType {
    const db: { [key: string]: Writable<any> } = {},
      saveOnCommit = writable(saveOnUpdate);

    function save() {}

    return {
      id,
      saveOnCommit,
      type: type,
      separator: separator,
      get(id: string) {
        let item = db[id];
        if (item === undefined) {
          item = db[id] = writable({});
          item.subscribe((v) => {
            if (get(saveOnCommit)) {
              save();
            }
          });
        }

        return item;
      },
      save,
    };
  }

  return {
    name,
    database: createDatabase,
  };
}

export function createTable<T>(
  constructor: (id: string) => T = (id) => ({ id } as T)
): TableType<T> {
  return Object.assign(
    function Register(database: DatabaseType): BoundTableType<T> {
      return {} as BoundTableType<T>;
    },
    { constructor }
  );
}
