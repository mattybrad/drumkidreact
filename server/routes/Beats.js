var Router = require('express').Router;
var router = new Router();
var Beat = require('../models/Beat');

// /api/v1/beats/

// create new beat
router.post('/', function(req, res){
  console.log(req.body);
  Beat.create(req.body, function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  })
})

// read existing beat
router.get('/:id', function(req, res){
  Beat.findOne({_id:req.params.id}).exec(function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  })
})

// update existing beat
router.put('/:id', function(req, res){
  Beat.update({_id:req.params.id}, req.body).exec(function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  })
})

// delete existing beat
router.delete('/:id', function(req, res){
  Beat.remove({_id:req.params.id}).exec(function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  })
})

// list beats
router.get('/', function(req, res){
  Beat.find({}).exec(function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  })
})


module.exports = router;
