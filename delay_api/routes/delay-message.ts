import { Express } from "express";
import { NextHandleFunction } from "connect";
import delayMessage from "delay_api/controllers/delay-message";
import validateDelayMessage from "../middleware/valid-delay-message";

export function delayRoutes(app: Express, jsonParser: NextHandleFunction) {
  app.post("/delay-message", jsonParser, validateDelayMessage, delayMessage);
}
