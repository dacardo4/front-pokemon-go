const express = require('express');

const app = express();

app.use(express.static(__dirname+'/dist/pokemon-go'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/pokemon-go/index.html'));
});

app.listen(process.env.PORT || 8080);