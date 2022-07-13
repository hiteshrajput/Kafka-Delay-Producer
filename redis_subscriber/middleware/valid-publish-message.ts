import responseCode from "constants/response-code";
import responseMessage from "constants/response-message";
import { Request, Response, NextFunction } from "express";
import { PublishMessage } from "types/publish-message";

function isValidPublishMessage(message: PublishMessage) {
  return message._id !== undefined && message._id !== null;
}

export default function validatePublishMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const message: PublishMessage = req.body;
    if (!isValidPublishMessage(message))
      throw responseMessage.INVALID_PUBLISH_MESSAGE_FORMAT;
    next();
  } catch (err) {
    console.log(err);
    return res.status(responseCode.BAD_REQUEST).send(err);
  }
}
