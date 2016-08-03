var Router = require('express').Router;
var Beats = require('./Beats');
var router = new Router();

router.use('/api/v1/beats', Beats);

module.exports = router;
