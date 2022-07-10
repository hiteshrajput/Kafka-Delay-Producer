/**
 * Kafka Producer Microservice
 */
 import express, { Express } from "express";
 import loadConfigs from "load_configs";
 
 const PORT = loadConfigs().KAFKA_PRODUCER_PORT 
 const app: Express = express()
 
 app.listen(PORT,()=>{
     console.log(`KAFKA_PRODUCER_SERVICE at PORT ${PORT}`)
 })