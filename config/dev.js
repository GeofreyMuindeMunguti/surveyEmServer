let config = {

    mongo: {
        // url: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/erp'
        url: 'mongodb://localhost/surveyDatabase'
    },

    // Secret Key
    Secret: 'Survey'

};

module.exports = config;
