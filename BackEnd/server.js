require('dotenv').config()
const app = require('./src/app')

app.listen(5000, () => {                 //app.listen starts the server at port 3000 and when the server starts callback function will be executed.

    console.log("server is running on port 5000");
})

