const db = require("../../Connect/Connect");
const Folder = require("../../model/Folder/Folder.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /Folder:
   *   post:
   *    tags:
   *    - Folder
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              FolderName:
   *                type: string
   *              FolderPassWord:
   *                type: string
   *              isPassword:
   *                type: string
   *              IDRoom:
   *                type: string
   *              Token:
   *                type: string
   *              level:
   *                type: string
   *              IDParent:
   *                type: string
   *            required:
   *                - FolderName
   *                - FolderPassWord
   *                - isPassword
   *                - IDRoom
   *                - Token
   *                - level
   *                - IDParent
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/Folder", function (req, res) {
    Folder(
      db,
      req.body.FolderName,
      req.body.FolderPassWord,
      req.body.isPassword,
      req.body.IDRoom,
      req.body.Token,
      req.body.level,
      req.body.IDParent,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
