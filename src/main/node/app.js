var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , redis = require("redis");


var sockets = {}

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/view/index.html');
//  res.sendfile(__dirname + '/index.htm');
});

var hashs

io.of("/hashs").on("connection",function(socket){
    var interval = setInterval(function(){  
        socket.emit("data",hashs)        
    },500)
    
    socket.on("disconect",function(){
        clearInterval(interval)
    })

})

var redisClient = redis.createClient(6379,"127.0.0.1")
redisClient.on("ready",function(){
    setInterval(function(){
        redisClient.hgetall("word-count-dev",function(err,data){
            var count = 0
            var total = 0
            for(var i in data)
                data[i] = parseInt(data[i])
            var keys = Object.keys(data)
            kyes = keys.sort(function(a,b){
                return data[b] - data[a]
            })
            
            var toShow = {}
            for(var i = 0; i < Math.min(keys.length,40); i++)
                toShow[keys[i]] = data[keys[i]]
            hashs = toShow;
        })
    },200)
})
app.use("/view",require("express").static(__dirname+'/view'));
//app.use("/view", app.static(__dirname + '/view'));

server.listen(12567);

