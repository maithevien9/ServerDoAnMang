module.exports = function (db, IDfolder, callback) {
  var dataString = "";
  var data = [];
  if (IDfolder == null) {
    dataString = "KHONG_THANH_CONG";
    callback(dataString, data);
  } else {
    var sql = `select documents.ID, documents.IDuser,documents.SendTime, documents.IDfolder  FROM documents INNER JOIN folder on documents.IDfolder = folder.ID WHERE folder.ID = ${IDfolder}`;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        console.log(results);
        data = JSON.parse(JSON.stringify(results));
        dataString = "THANH_CONG";
        callback(dataString, data);
      }
    });
  }
};
