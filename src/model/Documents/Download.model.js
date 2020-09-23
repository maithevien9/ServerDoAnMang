module.exports = function (db, res, req, callback) {
  var nameFile = [];
  var sql = `SELECT Name  FROM documents WHERE ID = ${req.params.ID}`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    } else {
      nameFile = JSON.parse(JSON.stringify(results));
      var name = nameFile[0].Name;
      console.log(name);

      var file = `./public/uploads/${name}`;

      res.download(file);
    }
  });
};
