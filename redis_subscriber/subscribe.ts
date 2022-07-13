import getDelayedMessage from "delay_api/db/mongo/query/get-delay-message";
import { redisClient2 } from "redis_subscriber/redis/conn";
import axios from "axios";
import loadConfigs from "load_configs";
import { Payload } from "types/delay-message";

redisClient2.subscribe(`__keyevent@0__:expired`, async (expiredMessage) => {
  console.log("EXPIRED MESSGE : \n");
  console.log(expiredMessage);
  const data = await getDelayedMessage(expiredMessage);
  if (data !== null && data !== undefined) {
    const topic = data.payload.topic;
    const message = data.payload.message;
    const payload: Payload = {
      topic: topic,
      message: message,
    };
    await axios.post(loadConfigs().KAFKA_PRODUCER_MESSAGE_ROUTE, payload);
    console.log(
      `NEW MESSAGE TO BE INGESTED IN TOPIC : ${topic} MESSAGE :${message}`
    );
  }
});
