const jwt = require("jsonwebtoken");
module.exports = function (db, User, PassWord, callback) {
  console.log("this is to to Login");
  var dataString = "";
  var token = "";
  var data = [];
  var id = 0;
  if (User == null && PassWord == null) {
    dataString = "KHONG_THANH_CONG";

    callback(dataString, data, token);
  } else {
    var sql = `SELECT ID, User, PassWord FROM user where User = '${User}' and PassWord = md5('${PassWord}')`;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      }

      if (results.length != 0) {
        data = JSON.parse(JSON.stringify(results));

        dataString = "THANH_CONG";
        jwt.sign({ ID: data[0].ID }, "key", (err, token) => {
          console.log(token);
          callback(dataString, data, token);
        });
      } else {
        dataString = "KHONG_THANH_CONG";
        callback(dataString, data, token);
      }
    });
  }
};
