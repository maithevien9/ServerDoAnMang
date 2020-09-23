var jwtDecode = require("jwt-decode");
module.exports = function (db, ID, Token, callback) {
  var dataString = "";
  var IDuser = "";
  if (ID == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString);
  } else {
    try {
      var decoded = jwtDecode(Token);
      var IDuser = decoded.ID;
      console.log(IDuser);
    } catch (err) {
      dataString = "KHONG_THANH_CONG";
    }
    if (dataString != "KHONG_THANH_CONG") {
      var sql1 = `select * from documents where ID = ${ID}`;
      db.query(sql1, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          if (results.length != 0) {
            var sql = `delete from documents where id = ${ID}`;
            db.query(sql, function (err, results, fields) {
              if (err) {
                throw err;
              } else {
                dataString = "THANH_CONG";
                callback(dataString);
              }
            });
          } else {
            dataString = "KHONG_THANH_CONG";
            callback(dataString);
          }
        }
      });
    } else {
      dataString = "KHONG_THANH_CONG";
      callback(dataString);
    }
  }
};
