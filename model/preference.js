const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const preferenceSchema = new Schema({

    Funds: String,
    EquityShares: String,
    GoldETF: String,
    Bonds: String,
    Stocks: String,
    CommercialRealEstate: String
    
});


var Preference = mongoose.model('preferenceCollections', preferenceSchema);

//var user1 = new Users({ firstName: 'gaurav', lastName: 'gupta', age: 22 });

module.exports = Preference;