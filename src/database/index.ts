import { get, writable, type Writable } from 'svelte/store';
import fs from 'fs';
import path from 'path';
import type {
  DatabaseFileType,
  DatabaseServiceType,
  DatabaseType,
  TableType,
  BoundTableType,
} from './types';

export function createDatabaseService(
  name: string,
  separator: '/' = '/'
): DatabaseServiceType {
  const dbList: { [key: string]: DatabaseType } = {};

  function createDatabase(
    id: string,
    saveOnUpdate: boolean = false,
    type: DatabaseFileType = 'json'
  ): DatabaseType {
    const db: { [key: string]: Writable<any> } = {},
      saveOnCommit = writable(saveOnUpdate);
    let released = false;

    function save(): void {
      for (const id in db) {
        const doc = get(db[id]);
        if (doc === undefined) continue;
      }
    }

    function release(saveDatabase: boolean = true): boolean {
      try {
        if (saveDatabase) save();
        released = true;

        delete dbList[id];
      } catch (error) {
        console.log(error);
        return false;
      } finally {
        return true;
      }
    }

    const result = {
      id,
      saveOnCommit,
      type: type,
      separator: separator,
      // Get Document
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

    dbList[id] = result;

    return result;
  }

  return {
    name,
    database(id) {
      let db = dbList[id];
      if (db !== undefined) return db;
      else return createDatabase(id);
    },
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
