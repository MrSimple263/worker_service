var express=require('express');
var app=express();
app.listen('3000',()=>{
  console.log('server is created');
});
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html');
});
