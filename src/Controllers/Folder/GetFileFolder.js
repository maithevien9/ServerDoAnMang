const db = require("../../Connect/Connect");
const GetFileFolder = require("../../model/Folder/GetFileFolder.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /GetFileFolder/{IDFolder}:
   *   get:
   *    tags:
   *    - Folder
   *    parameters:
   *        - name: IDFolder
   *          description: IDFolder
   *          in: path
   *          type: integer
   *          required: true
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/GetFileFolder/:IDFolder", function (req, res) {
    GetFileFolder(db, req.params.IDFolder, function (dataString, data, file) {
      res.json({
        dataString: dataString,
        data: data,
        file: file,
      });
    });
  });
};
