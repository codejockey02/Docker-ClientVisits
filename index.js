const express = require('express');
const app = express();
const redis = require('redis');
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});
client.set('visits',0);

app.get('/',(req,res)=>{
    client.get('visits',(err,visits)=>{
        res.send("Number of Visits: "+visits);
        client.set('visits', parseInt(visits)+1);
    });
});

app.listen(8080, ()=>{
    console.log("App runs on 8080");
});
