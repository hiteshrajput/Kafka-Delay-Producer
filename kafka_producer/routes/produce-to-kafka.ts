import { NextHandleFunction } from "connect";
import { Express } from "express";
import produceMessageToKafka from "kafka_producer/controller/produce-to-kafka";

export default function produceMessageToKafkaRoutes(
  app: Express,
  jsonParser: NextHandleFunction
) {
  app.post("/produce-message-to-kafka", jsonParser, produceMessageToKafka);
}
