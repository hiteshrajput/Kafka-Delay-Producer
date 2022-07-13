import redisClient from "redis_subscriber/redis/conn";
import { PublishMessage } from "types/publish-message";

export default async function setMessage(message: PublishMessage) {
  return await redisClient.setEx(
    String(message._id),
    Number(message.delay),
    String(message._id)
  );
}
