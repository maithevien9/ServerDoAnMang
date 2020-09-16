const db = require("../../Connect/Connect");
// const jwt = require("jsonwebtoken");
const Upload = require("../../model/Documents/Upload.model");
module.exports = function (app) {
  app.post("/upload", function (req, res) {
    const file = req.files.photo;
    Upload(db, file, res, function (data) {
      res.json({
        success: data,
        message: "file upload",
      });
    });
    // const file = req.files.photo;
    // file.mv("./public/uploads/" + file.name, function (err, result) {
    //   if (err) throw err;
    //   res.send({
    //     success: true,
    //     message: "file upload",
    //   });
    // });
  });
};
