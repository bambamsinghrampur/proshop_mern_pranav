const express = require('express')

const app = express()


app.get("/", (req,resp) => { 
resp.send("Api is running")

})

app.listen(5000,console.log('Server running on port 5000'))