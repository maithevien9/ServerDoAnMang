var jwtDecode = require("jwt-decode");
module.exports = function (db, IDFolder, Token, Name, callback) {
  var dataString = "";
  var ID = "";
  console.log(123);
  if (IDFolder == null && Token == null && Name == null) {
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
      var sql = `UPDATE folder SET Name='${Name}' WHERE ID = ${IDFolder}`;
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
