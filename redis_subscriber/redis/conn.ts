import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.connect();

console.log("REDIS CLIENT CREATED");

export default redisClient;
