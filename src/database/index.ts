import { readonly, writable, type Writable } from 'svelte/store';

type DatabaseFileType = 'json';

type DatabaseServiceType = {
  name: string;
  Create;
};

type DatabaseType = {
  name: Writable<string>;
  saveOnCommit: Writable<boolean>;
  readonly type: DatabaseFileType;
  readonly separator: string;
};

export function createDatabaseService(
  name: string,
  separator: '/' = '/'
): DatabaseServiceType {
  function createDatabase(
    id: string,
    saveOnCommit: boolean = false,
    type: DatabaseFileType = 'json'
  ): DatabaseType {
    const db = {},
      name = writable(id),
      saveOn = writable(saveOnCommit);

    return {
      name: name,
      saveOnCommit: saveOn,
      type: type,
      separator: separator,
    };
  }

  return {
    name,
    createDatabase,
  };
}

export function createTable<T>(id: string) {
  return function Register(database: DatabaseType) {};
}
