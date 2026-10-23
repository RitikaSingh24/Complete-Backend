const express = require('express');   //need to rewuire express for creating 


const app = express()      //then call express and server will create but not start (here server is only created)

app.get("/", (req, res) => {
    res.send("hello world")
})                                // agar slash(/) api pe request ayegi to res hello world jayega

app.get("/about", (req, res) => {
    res.send("About Page 👍")           //agar about pt ayegi to About page res jayega with emoji
})  
app.listen(3000)      //now server starts