const mysqlConnection = require("../db/mysql");

async function getMessages() {
  let result;
  try {
    const sql = "SELECT * FROM chat ORDER BY created_at DESC";
    const [rows] = await mysqlConnection.execute(sql, []);

    if (rows.length > 0) {
      result = rows;
    }
  } catch (err) {
    throw err;
  }
  return result;
}

async function insertMessage(username, message) {
  let messageId;
  try {
    const sql = `INSERT into chat (username,message) VALUES(?,?) `;
    const rows = await mysqlConnection.execute(sql, [username, message]);
    if (rows.length > 0) {
      messageId = rows[0].insertId;
    }
  } catch (err) {
    throw err;
  }
  return messageId;
}

module.exports = { getMessages, insertMessage };
