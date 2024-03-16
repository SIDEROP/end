import express from "express";
import cors from "cors"

let app = express()

// import routes
import usrRouter from "./routes/user.routes.js"

// use routes
app.use("/v1",usrRouter)

export default app