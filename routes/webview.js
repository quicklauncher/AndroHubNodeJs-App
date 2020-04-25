var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    res.render('webview',{
      name:'webview'
    });
  });
  module.exports = router;