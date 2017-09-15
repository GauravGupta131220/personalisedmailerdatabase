var expect = require('chai').expect;

var sinon = require('sinon')


var App = require('../server.js')

var supertest = require('supertest')

var frequencyModel = require('../model/frequency.js')
var preferenceModel = require('../model/preference.js')


var server = supertest.agent("http://localhost:8080")

var request = require('supertest')

var express = require('express')



//testing the POST api
let postStub = sinon.stub(frequencyModel.prototype, 'save');
describe('testing the post method', function() {

    before(function() {
        postStub.yields(null, {
            "frequency": "daily"
        });
    });

    it('response from json', function(done) {
        request(App)
            .post('/insert')
            .end(function(err, res) {
                if (err) return done(err)
                else {
                    expect(res.body.frequency).to.be.equal("daily");
                    done();
                }
            })
    })
})


//testing the GET api
let getStub = sinon.stub(frequencyModel, 'find')
describe('testing the get method', function() {
    it('respond with json', function(done) {
        getStub.yields(null, [{ frequency : "daily"}])
        request(App)
            .get('/show')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body[0].frequency).to.be.equal("daily");
                done();
            })
    });
});
