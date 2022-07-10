import responseCode from "constants/response-code";
import responseMessage from "constants/response-message";
import saveDelayMessage from "delay_api/db/connection/mongo/query/save-delay-message";
import { Request, Response } from "express";
import { DelayMessage } from "types/delay-message";

export default async function delayMessage(req: Request, res: Response) {
  try {
    const message: DelayMessage = req.body as DelayMessage;

    // insert delay message in mongodb
    const data = await saveDelayMessage(message);

    return res.status(responseCode.SUCCESS).json({
      message: responseMessage.SUCCESSFULLY_INSERTED_MESSAGE,
    });
  } catch (error) {
    return res.status(responseCode.BAD_REQUEST).send(error);
  }
}
