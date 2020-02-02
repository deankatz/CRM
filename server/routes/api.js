const express = require('express')
const router = express.Router()
const Clients = require('../model/Clients')
const data = require('./data')


router.get('/clients', function(req,res){
    Clients.find({}, function(err,result){
        res.send(result)
    })
})

router.post('/client', function(req,res){
    console.log(req.body)
    let t1 = new Clients(req.body)
    t1.save()
    res.end()
})



router.put('/client/:clientId', function(req,res){
    let client = req.params.clientId
    Clients.findOneAndUpdate({_id: client}, req.body ,(err, result)=>  {console.log(result) } )
    res.send(req.body)
})

    

    



// for(let d of data){
//     let c1 = new Clients(d)
//     c1.save()
// }

module.exports = router