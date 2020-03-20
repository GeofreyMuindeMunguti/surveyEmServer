const Question = require('../questions/questions.model').Question;


async function create(reqParam){
    let newReq = new Question(reqParam);
    await newReq.save();

    return Question.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Question.find({});
}


async function getOne(_id) {
    return Question.findById(_id);
}

async function getSurveyQuestions(id){
    console.log(id);
    return Question.find({surveyId: id});
}

async function update(id, reqParam) {
    let getReq = await Question.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Question.findById(id);

}


async function _delete(id) {
    await Question.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, getSurveyQuestions, update, delete: _delete };
