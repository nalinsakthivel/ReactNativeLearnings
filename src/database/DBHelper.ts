import {Platform} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: Platform.OS === 'ios' ? 'a.db' : 'a.db',
  location: 'default',
  createFromLocation: Platform.OS === 'ios' ? '~/www/a.db' : '~a.db',
});

export const createTable = () => {
  db.transaction(
    (tx: any) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, ps TEXT UNIQUE)',
        [],
        () => {
          console.log('Table created successfully');
        },
        (error: any) => {
          console.log('Error creating table', error);
        },
      );
    },
    (error: any) => {
      console.log('Transaction error', error);
    },
    () => {
      console.log('Transaction completed');
    },
  );
};

export const insertSQL = (data: {userName: string; password: string}) => {
  createTable(); // Ensure the table is created before inserting data

  db.transaction(
    tx => {
      tx.executeSql(
        'INSERT OR IGNORE INTO Users (name, ps) VALUES (?, ?)',
        [data.userName, data.password],
        (tx, result) => {
          if (result.rowsAffected > 0) {
            console.log('Record inserted with ID: ', result.insertId);
          } else {
            console.log('Record already exists or insertion ignored.');
          }
        },
        error => {
          console.log('Error inserting record', error);
        },
      );
    },
    error => {
      console.log('Transaction error', error);
    },
    () => {
      console.log('Transaction completed');
    },
  );
};

export const readAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM Users',
          [],
          (tx, result) => {
            const users = result.rows.raw();
            console.log('Retrieved raw data:', users); // Add this line for debugging
            resolve(users);
          },
          error => {
            console.log('Error retrieving records', error);
            reject(error);
          },
        );
      },
      error => {
        console.log('Transaction error', error);
        reject(error);
      },
      () => {
        console.log('Transaction completed');
      },
    );
  });
};

export const deleteAllUsers = () => {
  db.transaction(
    tx => {
      tx.executeSql(
        'DELETE FROM Users',
        [],
        (tx, result) => {
          console.log('Deleted all users');
        },
        error => {
          console.log('Error deleting users', error);
        },
      );
    },
    error => {
      console.log('Transaction error', error);
    },
    () => {
      console.log('Transaction completed');
    },
  );
};
