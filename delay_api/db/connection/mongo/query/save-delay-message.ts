import DelayMessageModel from "delay_api/db/connection/mongo/model/delay-message";
import { DelayMessage } from "types/delay-message";

export default async function saveDelayMessage(message: DelayMessage) {
  console.log(`MESSAGE TO BE INGESTED : ${message}`);
  const data = await new DelayMessageModel(message).save();
  console.log(`MESSAGE INGESTED : ${data} ${data._id}`);
  return data;
}
