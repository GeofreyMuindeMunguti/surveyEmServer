const companyProfileService = require('../services/companyProfile.service');


exports.create = (req, res, next) => {
    companyProfileService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    companyProfileService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    companyProfileService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.update = (req, res, next) => {
    companyProfileService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    companyProfileService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
