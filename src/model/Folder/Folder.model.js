var jwtDecode = require("jwt-decode");
module.exports = function (
  db,
  FolderName,
  FolderPassWord,
  isPassword,
  IDRoom,
  Token,
  level,
  IDParent,
  callback
) {
  var dataString = "";
  var ID = "";
  if (FolderName == null && Token == null && level == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString);
  } else {
    try {
      var decoded = jwtDecode(Token);
      var ID = decoded.ID;
      console.log(ID);
    } catch (err) {
      dataString = "KHONG_THANH_CONG";
    }
    if (dataString != "KHONG_THANH_CONG") {
      var sql = `INSERT into folder VALUES (null, '${FolderName}',md5('${FolderPassWord}'),  ${isPassword} , ${ID}, ${IDRoom}, ${level}, ${IDParent})`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          dataString = "THANH_CONG";
          callback(dataString);
        }
      });
    } else {
      callback(dataString);
    }
  }
};
