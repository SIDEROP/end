import "dotenv/config.js"
import app from "./app.js";
import con from "./db/connect.js";
import {port} from "./constants.js"







app.listen(process.env.PORT || port,()=>{
    console.log(`serv is run ${process.env.PORT || port}`)
})