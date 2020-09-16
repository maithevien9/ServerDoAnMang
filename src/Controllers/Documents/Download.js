const db = require("../../Connect/Connect");

const Download = require("../../model/Documents/Download.model");
module.exports = function (app) {
  app.post("/download", function (req, res) {
    Download(db, res, req, function (data) {});
    // var nameFile = [];
    // var sql = `SELECT Name  FROM documents WHERE ID = ${req.body.ID}`;
    // db.query(sql, function (err, results, fields) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     nameFile = JSON.parse(JSON.stringify(results));
    //     var name = nameFile[0].Name;
    //     console.log(name);

    //     var file = `./public/uploads/${name}`;

    //     res.download(file);
    //   }
    // });
    // var file = "./public/uploads/web.png";
    // res.download(file);
  });
};
