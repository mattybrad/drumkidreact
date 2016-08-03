var Router = require('express').Router;
var router = new Router();
var Beat = require('../models/Beat');

// /api/v1/beats/

// list beats
router.get('/', function(req, res){
  Beat.find({}).exec(function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  })
})

// add new beat
router.post('/', function(req, res){
  console.log(req.body);
  Beat.create(req.body, function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  })
})

module.exports = router;
