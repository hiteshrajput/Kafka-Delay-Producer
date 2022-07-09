/**
 * Delay API Microservice
 */
import express, { Express } from "express";
import loadConfigs from "load_configs";

const PORT = loadConfigs().DELAY_API_SERVER_PORT 
const app: Express = express()

app.listen(PORT,()=>{
    console.log(`DELAY_API_SERVICE at PORT ${PORT}`)
})