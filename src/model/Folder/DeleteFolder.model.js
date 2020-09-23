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
      var sql1 = `select * from folder where ID = ${ID} `;
      db.query(sql1, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          if (results.length != 0) {
            var sql2 = `select * from folder WHERE IDuser = ${IDuser} and ID = ${ID} `;
            db.query(sql2, function (err, results, fields) {
              if (err) {
                throw err;
              } else {
                if (results.length != 0) {
                  // var sql = `DELETE FROM documents WHERE IDfolder = ${ID};  delete from folder where id = ${ID}`;
                  // var sql_string = `DELETE FROM documents WHERE IDfolder = ${ID}; `;
                  // sql_string += `delete from folder where id = ${ID};`;
                  // db.query(sql_string, function (err, results, fields) {
                  //   if (err) throw err;
                  //   res.send("true");
                  // });
                  db.query(
                    `DELETE FROM documents WHERE IDfolder = ${ID}`,
                    function (err, rows, fields) {
                      if (err) throw err;

                      db.query(`delete from folder where id = ${ID}`, function (
                        err,
                        rows,
                        fields
                      ) {
                        if (err) throw err;

                        dataString = "THANH_CONG";
                        callback(dataString);
                      });
                    }
                  );
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
      });
    } else {
      dataString = "KHONG_THANH_CONG";
      callback(dataString);
    }
  }
};
