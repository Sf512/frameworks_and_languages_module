const express = require('express')
const {body, oneOf} = require ('express-validator')
const app = express()
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
        body("image").isBase64, 
        body("image").isURL
    ]),
function (req, res) {
    model.add_item(req.body)
    res.status(201).send("ok")
})



