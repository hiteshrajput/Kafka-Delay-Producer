/**
 * Redis subscriber Microservice
 */
import express, { Express } from "express";
import loadConfigs from "load_configs";
import * as bodyparser from "body-parser";
import redisClient from "redis_subscriber/redis/conn";
import { NextHandleFunction } from "connect";
import { publishRoutes } from "redis_subscriber/routes/publish-message";

import cors from "cors";

const jsonParser: NextHandleFunction = bodyparser.json();
const PORT = loadConfigs().REDIS_SUBSCRIBER_PORT;
const app: Express = express();

import "redis_subscriber/redis/conn";

app.use(cors());
publishRoutes(app, jsonParser);

app.listen(PORT, () => {
  console.log(`REDIS_SUBSCRIBER at PORT ${PORT}`);
});
