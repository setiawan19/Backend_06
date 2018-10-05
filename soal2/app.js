var express = require('express');
var app = express();
var routerku = require('./route_mongodb')
app.use(routerku)

app.get('/', (req,res)=>{
    res.send('DataCPU MongoDB')
})

app.listen(3210, ()=>{
    console.log('Server aktif @port 3210')
});