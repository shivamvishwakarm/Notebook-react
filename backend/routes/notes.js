const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
   let obj = {
        name:"notes"
    }
    res.json(obj)
})

module.exports = router