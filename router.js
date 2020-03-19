const express = require('express');
 exports.register = (app) => {
    app.use('/api/users', require('./api/users'));
    app.use('/api/companyProfile', require('./api/companyProfile'));
    app.use('/api/industry', require('./api/industry'));
    app.use('/api/questions', require('./api/questions'));
    app.use('/api/responses', require('./api/responses'));
    app.use('/api/survey', require('./api/survey'));
    app.use('/api/fileUpload', require('./api/fileUpload'));
    app.use('/static', express.static('./public'));
};
