import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://localhost:6379",
});

const redisClient2 = createClient({
  url: "redis://localhost:6379",
});

redisClient.connect();
redisClient2.connect();

console.log("REDIS CLIENT CREATED");

export { redisClient, redisClient2 };
