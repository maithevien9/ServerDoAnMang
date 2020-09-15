const db = require("../../Connect/Connect");
const jwt = require("jsonwebtoken");
const Login = require("../../model/Login.model");
module.exports = function (app) {
  app.post("/Login", function (req, res) {
    Login(db, req.body.User, req.body.PassWord, function (
      dataString,
      data,
      token
    ) {
      res.json({
        dataString: dataString,
        data: data,
        token: token,
      });
    });
  });
};
