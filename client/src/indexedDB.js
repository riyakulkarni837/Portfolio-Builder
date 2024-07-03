import { openDB } from 'idb';

const DB_NAME = 'my-database';
const DB_VERSION = 1;
const STORE_NAME = 'tokens';

async function getDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function saveToken(token) {
  const db = await getDB();
  await db.put(STORE_NAME, { id: 'auth-token', value: token });
}

export async function getToken() {
  const db = await getDB();
  const tokenEntry = await db.get(STORE_NAME, 'auth-token');
  return tokenEntry ? tokenEntry.value : null;
}

export async function deleteToken() {
  const db = await getDB();
  await db.delete(STORE_NAME, 'auth-token');
}
