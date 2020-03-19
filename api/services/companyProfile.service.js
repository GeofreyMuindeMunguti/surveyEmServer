const CompanyProfile = require('../companyProfile/companyProfile.model').CompanyProfile;


async function create(reqParam){
    let newReq = new CompanyProfile(reqParam);
    await newReq.save();

    return CompanyProfile.findOne({ _id: newReq._id });
}


async function getAll() {
    return await CompanyProfile.find({});
}


async function getOne(_id) {
    return CompanyProfile.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await CompanyProfile.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return CompanyProfile.findById(id);

}


async function _delete(id) {
    await CompanyProfile.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
