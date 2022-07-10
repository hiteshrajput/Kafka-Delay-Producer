import responsCode from "constants/response-code";
import responseMessage from "constants/response-message";
import { Request, Response } from "express";
import { DelayMessage } from "types/delay-message";

export default function delayMessage(req: Request, res: Response) {
  const message: DelayMessage = req.body as DelayMessage;
  console.log(typeof message.delayTime);
  return res.status(responsCode.SUCCESS).json({
    message: responseMessage.OK,
  });
}
