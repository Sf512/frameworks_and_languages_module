const express = require('express')
const app = express()
const port = 8000

app.get('/item/:itemId', function (req, res) {
    res.send(req.params["itemId"])
})

app.listen(port, () => {
    console.log(`server started`)
})
