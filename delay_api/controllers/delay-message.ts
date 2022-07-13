import responseCode from "constants/response-code";
import responseMessage from "constants/response-message";
import saveDelayMessage from "delay_api/db/mongo/query/save-delay-message";
import { Request, Response } from "express";
import { DelayMessage } from "types/delay-message";
import axios from "axios";
import loadConfigs from "load_configs";
import { PublishMessage } from "types/publish-message";

export default async function delayMessage(req: Request, res: Response) {
  try {
    const message: DelayMessage = req.body as DelayMessage;

    // insert delay message in mongodb
    const data = await saveDelayMessage(message);

    const message_id: String = data._id.toString();
    const delayTime: Number = data.delayTime;

    const publishMessage: PublishMessage = {
      _id: message_id,
      delay: delayTime,
    };

    await axios.post(loadConfigs().REDIS_PUBLISH_MESSAGE_ROUTE, publishMessage);

    return res.status(responseCode.SUCCESS).json({
      message: responseMessage.SUCCESSFULLY_INSERTED_MESSAGE,
      data: publishMessage,
    });
  } catch (error) {
    return res.status(responseCode.BAD_REQUEST).send(error);
  }
}
