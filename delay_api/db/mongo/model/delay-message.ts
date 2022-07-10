import DelayMessageSchema from "delay_api/db/mongo/schema/delay-message";
import mongoose from "delay_api/db/mongo/conn";

const DelayMessageModel = mongoose.model("DelayMessages", DelayMessageSchema);

export default DelayMessageModel;
