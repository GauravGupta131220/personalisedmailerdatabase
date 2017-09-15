var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //extension of views
app.use(bodyParser.urlencoded({ extended: true }));

const frequency = require('./model/frequency');

const preference = require('./model/preference');

const router = express.Router();



//mongoose setup for database
const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/personalisedmailer');



//opening view 
app.get('/', function(req,res){
    res.render('preferences');
})


//submit post data for frequency of interval
app.post('/insert', function(req,res){

	let frequencyData=new frequency();

	frequencyData.frequency=req.body.optradio;
	
	frequencyData.save((err, Data) => {

        if (err) {
            console.log("not found");
            return res.send('error');
        } else {
        	console.log(Data);
            res.json(Data);
        }
    })
})



//show frequency
app.get('/show',function(req,res){


		frequency.find((err,data)=>{

		if(err){
			console.log("not found");
		}else{
			res.json(data);
		}
	});


})



//post data for preferences
app.post('/insert_preference', function(req,res){

	let preferenceData=new preference();

	preferenceData.Funds=req.body.funds;
	preferenceData.EquityShares=req.body.equityShares;
	preferenceData.GoldETF=req.body.goldETF;
	preferenceData.Bonds=req.body.bonds;
	preferenceData.Stocks=req.body.stocks;
	preferenceData.CommercialRealEstate=req.body.commercialRealEstate;
	
	preferenceData.save((err, Data) => {

        if (err) {
            console.log("not found");
            return res.send('error');
        } else {
        	console.log(Data);
            res.json(Data);
        }
    })
})


app.get('/show_preference',function(req,res){


		preference.find((err,data)=>{

		if(err){
			console.log("not found");
		}else{
			res.json(data);
		}
	});


})




//start server
app.listen(3001);
module.exports = app;