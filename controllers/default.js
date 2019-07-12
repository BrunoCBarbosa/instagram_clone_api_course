const router = require('express').Router()

router.get('/', function(req, res){
    res.json({msg: 'Olá'});
});

module.exports = router;