import DelayMessageModel from "delay_api/db/mongo/model/delay-message";

export default async function getDelayedMessage(_id: String) {
  const data = await DelayMessageModel.findById(_id);
  return data;
}
