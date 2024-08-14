import mysql from 'mysql2';
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'thongttdev',
  database: 'my_db',
});

const db = connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('DB connect successfully!');
});

export default db;
