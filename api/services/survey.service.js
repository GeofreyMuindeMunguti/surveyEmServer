const Survey = require('../survey/survey.model').Survey;


async function create(reqParam){
    let newReq = new Survey(reqParam);
    await newReq.save();

    return Survey.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Survey.find({});
}


async function getOne(_id) {
    return Survey.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await Survey.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Survey.findById(id);

}


async function _delete(id) {
    await Survey.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
