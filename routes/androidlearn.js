var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    res.render('androidlearn',{
      name:'androidlearn'
    });
  });
  module.exports = router;