const db = require("../../Connect/Connect");
const CheckPass = require("../../model/Folder/CheckPass.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /CheckPass/{PassWord}/IDfolder/{IDfolder}:
   *   get:
   *    tags:
   *    - Folder
   *    parameters:
   *        - name: PassWord
   *          description: PassWord
   *          in: path
   *          type: string
   *          required: true
   *        - name: IDfolder
   *          description: IDfolder
   *          in: path
   *          type: string
   *          required: true
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/CheckPass/:PassWord/IDfolder/:IDfolder", function (req, res) {
    CheckPass(db, req.params.PassWord, req.params.IDfolder, function (
      dataString
    ) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
