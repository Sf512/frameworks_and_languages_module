const express = require('express')
const {body, oneOf, validationResult} = require ('express-validator')
const app = express()
const port = 8000
const model = require("./dataModel.js")

app.use(express.urlencoded())

app.get('/item/:itemId', function (req, res) {
    let item = model.get_item(req.params["itemID"])
    res.send(item) 
})

app.get('/items/', function (req, res) {
    let validItems = model.searchOne(req.query ["user_id"], req.query["keywords"],req.query["lat"], req.query["lon"], req.query["radius"], req.query["date_from"], req.query["date_to"])
    res.status(200).send(validItems)
})

app.delete('/item/:itemId', function(req,res){
    let delvar = model.delete_item(req.params["itemID"])
    if(delvar){
        res.status(200).send("ok")
    } else {   
        res.status(400).send("invalid itemId")
    }
})

app.post("/item/",body("user_id").notEmpty(),
    body("keywords").notEmpty(),
    body("description").notEmpty(),
    body("lat").notEmpty(),
    body("lon").notEmpty(),
    oneOf([
        body("image").isBase64(), 
        body("image").isURL()
    ]),
function (req, res) {
    if(validationResult(req).isEmpty()){
        model.add_item(req.body)
        res.status(201).send("ok")
    } else {   
        res.status(405).send("not valid")
    }
    const result = validationResult(req)
    console.log(result.array())
})

app.listen(port, () => {
    console.log(`server started`)
})