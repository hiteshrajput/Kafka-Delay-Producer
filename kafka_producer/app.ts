/**
 * Kafka Producer Microservice
 */
import express, { Express } from "express";
import loadConfigs from "load_configs";
import * as bodyParser from "body-parser";
import { NextHandleFunction } from "connect";
import produceMessageToKafkaRoutes from "kafka_producer/routes/produce-to-kafka";

const PORT = loadConfigs().KAFKA_PRODUCER_PORT;
const app: Express = express();

const jsonParser: NextHandleFunction = bodyParser.json();

produceMessageToKafkaRoutes(app, jsonParser);

app.listen(PORT, () => {
  console.log(`KAFKA_PRODUCER_SERVICE at PORT ${PORT}`);
});
