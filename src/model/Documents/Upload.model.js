module.exports = function (db, file, res, callback) {
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

  if (file == null) {
    data = "KHONG_THANH_CONG";

    callback(data);
  } else {
    file.mv("./public/uploads/" + file.name, function (err, result) {
      if (err) throw err;
    });
    var sql = `insert into documents VALUES (null, 1, '${file.name}', '${
      year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec
    }', 5)`;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        data = "THANH_CONG";
        callback(data);
      }
    });
  }
};
