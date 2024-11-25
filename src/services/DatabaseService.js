import { CapacitorSQLite } from '@capacitor-community/sqlite';

export async function createDatabase() {
try {
  const db = await CapacitorSQLite.createConnection({ 
    database: 'myDb', 
    encrypted: false, 
    mode: 'no-encryption', 
    version: 1 
  });
  
  await db.open();
  
  const createTable = `
    CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
    );
  `;
  await db.execute({ statements: createTable });
  await CapacitorSQLite.closeConnection({ database: 'myDb' });
  } catch (err) {
    console.error('Error: ', err);
  }
}