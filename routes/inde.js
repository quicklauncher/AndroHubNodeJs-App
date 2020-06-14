var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    res.render('inde',{
      name:'inde'
    });
  });
  module.exports = router;