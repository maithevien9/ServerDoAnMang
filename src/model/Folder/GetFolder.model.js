module.exports = function (db, IDRoom, callback) {
  var dataString = "";
  var data = [];
  if (IDRoom == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString, data);
  } else {
    var sql = `SELECT ID , Name, isPassWord , IDuser, level, IDParent FROM  folder WHERE IDRoom = ${IDRoom} and IDparent  IS  NULL`;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        data = JSON.parse(JSON.stringify(results));
        dataString = "THANH_CONG";
        callback(dataString, data);
      }
    });
  }
};
