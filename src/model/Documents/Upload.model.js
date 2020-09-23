var jwtDecode = require("jwt-decode");
module.exports = function (db, file, res, Token, IDFolder, callback) {
  console.log("this is  upload File");
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  var hour = date_ob.getHours();
  var min = date_ob.getMinutes();
  var sec = date_ob.getSeconds();

  console.log(
    year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec
  );
  var dataString = "";
  if (file == null && Token == null && IDFolder == null) {
    data = "KHONG_THANH_CONG";
    callback(data);
  } else {
    try {
      var decoded = jwtDecode(Token);
      var IDuser = decoded.ID;
      console.log(IDuser);
    } catch (err) {
      dataString = "KHONG_THANH_CONG";
    }
    if (dataString != "KHONG_THANH_CONG") {
      file.mv("./public/uploads/" + file.name, function (err, result) {
        if (err) throw err;
      });
      var sql = `insert into documents VALUES (null, ${IDuser}, '${
        file.name
      }', '${
        year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec
      }', ${IDFolder})`;
      db.query(sql, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          data = "THANH_CONG";
          callback(data);
        }
      });
    } else {
      callback(data);
    }
  }
};
