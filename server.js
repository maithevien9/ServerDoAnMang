var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload");
var cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
var Controllers = require("./src/Controllers/API");
const db = require("./src/Connect/Connect");

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.post("/upload", function (req, res) {
//   const file = req.files.photo;
//   file.mv("./public/uploads/" + file.name, function (err, result) {
//     if (err) throw err;
//     res.send({
//       success: true,
//       message: "file upload",
//     });
//   });
// });

// app.post("/download", function (req, res) {
//   var file = __dirname + "/public/uploads/web.png";
//   res.download(file);
// });
Controllers(app);

app.listen(8000);
