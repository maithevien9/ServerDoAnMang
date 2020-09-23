module.exports = function (db, IDFolder, callback) {
  var dataString = "";
  var data = [];
  var file = [];
  if (IDFolder == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString, data, file);
  } else {
    var sql = `SELECT ID , Name, isPassWord , IDuser, level, IDParent FROM  folder WHERE  IDparent  =   ${IDFolder}`;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        data = JSON.parse(JSON.stringify(results));
        dataString = "THANH_CONG";

        var sql1 = `select ID, IDuser, name, SendTime  from documents WHERE IDfolder =  ${IDFolder}`;

        db.query(sql1, function (err, results, fields) {
          if (err) {
            throw err;
          } else {
            file = JSON.parse(JSON.stringify(results));
            dataString = "THANH_CONG";
            callback(dataString, data, file);
          }
        });
      }
    });
  }
};
