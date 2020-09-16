module.exports = function (db, name, email, password, callback) {
  console.log("this is to to Register");
  var id = 0;
  var dataString = "";
  if (name == null && email == null && password == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString);
  } else {
    try {
      var sql = `INSERT INTO users (email,password,name) VALUES ('${email}',md5('${password}'),'${name}')`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          dataString = "KHONG_THANH_CONG";
          callback(dataString);
        } else {
          dataString = "THANH_CONG";
          callback(dataString);
        }
      });
    } catch (err) {}
  }
};
