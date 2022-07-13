import responseCode from "constants/response-code";
import responseMessage from "constants/response-message";
import { Request, Response } from "express";
import { Producer, Message } from "kafkajs";
import kafka from "kafka_producer/kafka/config";
import { Payload } from "types/delay-message";

export default async function produceMessageToKafka(
  req: Request,
  res: Response
) {
  const payload: Payload = req.body;
  console.log(
    `Message received to KAFKA for TOPIC : ${payload.topic} is ${payload.message}`
  );
  const producer: Producer = kafka.producer();
  await producer.connect();
  const producerObj = {
    topic: payload.topic,
    messages: [
      {
        key: payload.topic,
        value: payload.message,
      },
    ],
  };
  const kafkaResponse = await producer.send(producerObj);
  console.log(`MESSAGE IN KAFKA DONE :-)`);
  return res.status(responseCode.SUCCESS).send(kafkaResponse);
}
