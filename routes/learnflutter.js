var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    res.render('learnflutter',{
      name:'learnflutter'
    });
  });
  module.exports = router; 