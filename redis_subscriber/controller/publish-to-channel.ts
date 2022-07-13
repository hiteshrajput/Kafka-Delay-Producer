import { RedisCommandArgument } from "@redis/client/dist/lib/commands";
import responseCode from "constants/response-code";
import responseMessage from "constants/response-message";
import { Request, Response } from "express";
import setMessage from "redis_subscriber/redis/query/set-message";
import { PublishMessage } from "types/publish-message";

export default async function publishMessageToChannel(
  req: Request,
  res: Response
) {
  const message: PublishMessage = req.body as PublishMessage;
  console.log(`message to be added ${message}`);
  const redisRes = await setMessage(message);
  if (redisRes != responseMessage.OK) {
    return res.status(responseCode.BAD_REQUEST).send(redisRes);
  }
  return res.status(responseCode.SUCCESS).json({ message: responseMessage.OK });
}
