const express = require('express');
const router = express.Router();


router.get("/video", (req,res) =>{
    res.send("video")
})


module.exports = router;