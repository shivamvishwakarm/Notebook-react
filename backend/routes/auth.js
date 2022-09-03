const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
   let obj = {
        name:"ram"
    }
    res.json(obj)
})

module.exports = router