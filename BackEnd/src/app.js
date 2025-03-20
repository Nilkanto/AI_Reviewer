const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");
const path = require("path");

const app = express()            //if we call the express() then it starts the server

const _dirname = path.resolve();

app.use(express.json())

app.use(cors())

app.get("/" ,(req,res) => {
    res.send(`Hello World`);
})
 
app.use("/ai" , aiRoutes)

app.use(express.static(path.join(_dirname, "/FrontEnd/dist")));
app.get('*',(req,res) => {
    res.sendFile(path.resolve(_dirname, "FrontEnd", "dist", "index.html"));
});



module.exports = app