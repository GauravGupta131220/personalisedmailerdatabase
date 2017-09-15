const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const frequencySchema = new Schema({

    frequency: String
    
});


var Frequency = mongoose.model('frequencyCollections', frequencySchema);

//var user1 = new Users({ firstName: 'gaurav', lastName: 'gupta', age: 22 });

module.exports = Frequency;