import { redisClient2 } from "redis_subscriber/redis/conn";

redisClient2.subscribe(`__keyevent@0__:expired`, (message) => {
  console.log("EXPIRED MESSGE : \n");
  console.log(message);
});
