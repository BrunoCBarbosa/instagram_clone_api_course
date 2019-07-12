const router = require('express').Router();
const itemsService = require('../services/items');
const databaseService = require('../services/database');

//Promise-based version
router.post('/', function(req, res){
    databaseService.connect().then(function(database){
        itemsService
            .saveItem(database, req.body)
            .then(function(error, item){
                if(error !== null){
                    return res.status(400).json(error);
                }
                return Response.status(200).json(item);
            });
    }).catch(function (error){
        res.status(500).json(error);
    });
});

// Async/await-based version
// router.post('/', async function(request, response) {
//   try {
//     const database = await databaseService.connect()
//     const item = await itemsService.saveItem(database, request.body)

//     return response.status(200).json(item)
//   } catch (error) {
//     response.status(500).json(error)
//   }
// })

module.exports = router;