export type DatabaseFileType = 'json';

export type DatabaseServiceType = {
  name: string;
  database(
    id: string,
    saveOnCommit?: boolean,
    type?: DatabaseFileType
  ): DatabaseType;
};

export type DatabaseType = {
  readonly id: string;
  readonly saveOnCommit: Writable<boolean>;
  readonly type: DatabaseFileType;
  readonly separator: string;
  get<T>(id: string): Writable<T>;
  save(): void;
};

export type TableType<T> = {
  readonly constructor: (id: string) => T;
} & ((database: DatabaseType) => BoundTableType<T>);

export type BoundTableType<T> = {
  readonly constructor: (id: string) => T;
};
