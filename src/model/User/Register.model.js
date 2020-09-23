module.exports = function (db, User, PassWord, Room, callback) {
  console.log("this is Register");
  var dataString = "";
  var ID = "";
  if (User == null && PassWord == null && Room == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString);
  } else {
    var sql = `select ID from user where User = '${User}'`;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        if (results.length == 0) {
          var sql2 = `INSERT into user VALUES (null, '${User}',md5('${PassWord}'))`;
          db.query(sql2, function (err, results, fields) {
            if (err) {
              throw err;
            } else {
              sql3 = `select ID from user where User = '${User}'`;
              db.query(sql3, function (err, results, fields) {
                if (err) {
                  throw err;
                } else {
                  IDs = JSON.parse(JSON.stringify(results));
                  ID = IDs[0].ID;
                  console.log(ID);

                  sql4 = `insert into inforuser value (${ID} , null,null,null,null,${Room})`;
                  db.query(sql4, function (err, results, fields) {
                    if (err) {
                      throw err;
                    }
                    dataString = "THANH_CONG";
                    callback(dataString);
                  });
                }
              });
            }
          });
        } else {
          dataString = "KHONG_THANH_CONG";
          callback(dataString);
        }
      }
    });
  }
};
