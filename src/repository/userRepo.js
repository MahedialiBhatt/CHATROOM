const mysqlConnection = require("../db/mysql");

async function insertUser(name, username, encPwd) {
  let userId;
  try {
    const sql = `INSERT INTO user (name,username,password) VALUES(?,?,?) `;
    const rows = await mysqlConnection.execute(sql, [name, username, encPwd]);
    if (rows.length > 0) {
      userId = rows[0].insertId;
    }
  } catch (err) {
    throw err;
  }
  return userId;
}

async function getUserByUsername(username) {
  let userData;
  try {
    const sql = `SELECT * FROM user WHERE username = ?`;
    const [rows] = await mysqlConnection.execute(sql, [username]);
    if (rows.length > 0) {
      userData = rows[0];
    }
  } catch (err) {
    throw err;
  }
  return userData;
}

async function getUsersList() {
  let userList;
  try {
    const sql = `SELECT id,username FROM user`;
    const [rows] = await mysqlConnection.execute(sql, []);
    if (rows.length > 0) {
      userList = rows;
    }
  } catch (err) {
    throw err;
  }
  return userList;
}

module.exports = { insertUser, getUserByUsername, getUsersList };
