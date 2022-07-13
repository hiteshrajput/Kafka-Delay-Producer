import loadConfigs from "load_configs";
import { Express } from "express";
import { NextHandleFunction } from "connect";
import publishMessageToChannel from "redis_subscriber/controller/publish-to-channel";
import validatePublishMessage from "redis_subscriber/middleware/valid-publish-message";

export function publishRoutes(app: Express, jsonParser: NextHandleFunction) {
  app.post(
    "/publish-message-to-channel",
    jsonParser,
    validatePublishMessage,
    publishMessageToChannel
  );
}
