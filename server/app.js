const express = require('express')
const {body, oneOf, validationResult} = require ('express-validator')
const app = express()
app.use(express.urlencoded())
const port = 8000
const model = require("./dataModel.js")

app.get('/item/:itemId', function (req, res) {
    item = model.get_item(req.params["itemID"])
    res.send(item) 
})

app.listen(port, () => {
    console.log(`server started`)
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
const result = validationResult(req);
console.log(result.array())
})



