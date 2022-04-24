const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.send("Hello World! I am inside a docker container!!!!!");
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});