var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    res.render('pushnotify',{
      name:'pushnotify'
    });
  });
  module.exports = router;