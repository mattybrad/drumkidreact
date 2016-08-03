var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeatSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

var Beat = mongoose.model('Beat', BeatSchema);

module.exports = Beat;
