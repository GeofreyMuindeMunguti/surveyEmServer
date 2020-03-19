const fileUploadService = require("../services/fileUpload.service.js");

exports.uploadCompanyLogo = (req, res, next) => {
  fileUploadService.uploadCompanyLogo(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeCompanyLogo = (req, res, next) => {
  fileUploadService.removeCompanyLogo(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
