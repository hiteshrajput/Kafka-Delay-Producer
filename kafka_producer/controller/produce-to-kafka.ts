import responseCode from "constants/response-code";
import responseMessage from "constants/response-message";
import { Request, Response } from "express";
import { Payload } from "types/delay-message";

export default function produceMessageToKafka(req: Request, res: Response) {
  const payload: Payload = req.body;
  console.log(
    `Message received to KAFKA for TOPIC : ${payload.topic} is ${payload.message}`
  );
  return res.status(responseCode.SUCCESS).send(responseMessage.OK);
}
