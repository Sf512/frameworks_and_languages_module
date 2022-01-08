const express = require('express')
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


