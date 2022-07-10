/**
 * Delay API Microservice
 */
import express, { Express, NextFunction } from "express";
import loadConfigs from "load_configs";
import * as bodyparser from "body-parser";
import { delayRoutes } from "delay_api/routes/delay-message";
import { NextHandleFunction } from "connect";
import "delay_api/db/connection/mongo/conn";

const PORT = loadConfigs().DELAY_API_SERVER_PORT;
const app: Express = express();
const jsonParser: NextHandleFunction = bodyparser.json();

delayRoutes(app, jsonParser);

app.listen(PORT, () => {
  console.log(`DELAY_API_SERVICE at PORT ${PORT}`);
});
