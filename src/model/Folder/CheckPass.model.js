module.exports = function (db, PassWord, IDfolder, callback) {
  var dataString = "";
  if (PassWord == null && IDfolder == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString);
  } else {
    var sql = `SELECT * from  folder WHERE PassWord = ${PassWord} and ID = ${IDfolder} `;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        if (results.length != 0) {
          dataString = "THANH_CONG";
          callback(dataString);
        } else {
          dataString = "KHONG_THANH_CONG";
          callback(dataString);
        }
      }
    });
  }
};
