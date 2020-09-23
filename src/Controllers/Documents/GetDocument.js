const db = require("../../Connect/Connect");
const Getdocumments = require("../../model/Documents/GetDocuments.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /Getdocumments/{IDfolder}:
   *   get:
   *    tags:
   *    - Document
   *    parameters:
   *        - name: IDfolder
   *          description: IDfolder
   *          in: path
   *          type: integer
   *          required: true
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/Getdocumments/:IDfolder", function (req, res) {
    Getdocumments(db, req.params.IDfolder, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
