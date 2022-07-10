import dtypes from "constants/dtypes";
import responsCode from "constants/respons-code";
import responseMessage from "constants/response-message";
import { Request, Response, NextFunction } from "express";
import { DelayMessage } from "types/delay-message";

function isValidDelayMessage(delayMessage: DelayMessage): Boolean {
  return (
    delayMessage.delayTime !== undefined &&
    delayMessage.delayTime !== null &&
    delayMessage.payload !== undefined &&
    delayMessage.payload !== null &&
    delayMessage.payload.message !== undefined &&
    delayMessage.payload.message !== null &&
    delayMessage.payload.topic !== undefined &&
    delayMessage.payload.topic !== null &&
    typeof delayMessage.delayTime === dtypes.NUMBER &&
    typeof delayMessage.payload.message === dtypes.STRING &&
    typeof delayMessage.payload.topic === dtypes.STRING
  );
}

export default function validateDelayMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const delayMessage: DelayMessage = req.body;
    if (!isValidDelayMessage(delayMessage))
      throw responseMessage.INVALID_DELAY_MESSAGE_FORMAT;
    next();
  } catch (error) {
    return res.status(responsCode.BAD_REQUEST).send(error);
  }
}
