const express = require("express");
var router=express.Router();

router.get('/',function(req,res,next){
    res.render('loogin',{
      name:'loogin'
    });
  });
  module.exports = router;