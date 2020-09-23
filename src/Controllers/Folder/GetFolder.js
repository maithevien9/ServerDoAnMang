const db = require("../../Connect/Connect");
const GetFolder = require("../../model/Folder/GetFolder.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetFolder/{IDRoom}:
   *   get:
   *    tags:
   *    - Folder
   *    parameters:
   *        - name: IDRoom
   *          description: IDRoom
   *          in: path
   *          type: integer
   *          required: true
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/GetFolder/:IDRoom", function (req, res) {
    GetFolder(db, req.params.IDRoom, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
