/**
 * Redis subscriber Microservice
 */
 import express, { Express } from "express";
 import loadConfigs from "load_configs";
 
 const PORT = loadConfigs().REDIS_SUBSCRIBER_PORT 
 const app: Express = express()
 
 app.listen(PORT,()=>{
     console.log(`REDIS_SUBSCRIBER at PORT ${PORT}`)
 })