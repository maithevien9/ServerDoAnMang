const db = require("../../Connect/Connect");
const Search = require("../../model/Documents/Search.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /Search/{keyWord}:
   *   get:
   *    tags:
   *    - Document
   *    parameters:
   *        - name: keyWord
   *          description: keyWord
   *          in: path
   *          type: string
   *          required: true
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.get("/Search/:keyWord", function (req, res) {
    Search(db, req.params.keyWord, function (dataString, data, file) {
      res.json({
        dataString: dataString,
        data: data,
        file: file,
      });
    });
  });
};
