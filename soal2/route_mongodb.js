var router = require('express').Router();
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://setiawan:1234@localhost:27017/dataCPU';

const os = require('os');

var namaCPU = os.hostname();
var osTipe = os.type();
var osPlatform = os.platform();
var osRilis = os.release();
var ramSisa = os.freemem();
var ramTotal = os.totalmem();

MongoClient.connect(url, (err, db)=>{
    console.log("Terhubung ke MongoDB...");
});

router.post('/data', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        var datainput = {namacpu: namaCPU, tipe: osTipe,
                        platform: osPlatform, rilis: osRilis,
                        ramSisa: ramSisa, ramTotal: ramTotal};
        var collection = db.collection('data');
        collection.insert(datainput, (err, hasil)=>{
            console.log(hasil);
            res.send(hasil);
        });
    });
})

router.get('/data', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        var collection = db.collection('data');
        collection.find({}).toArray((err, hasil) => {
            console.log(hasil);
            res.send(hasil);
        });
    });
})

module.exports = router;