import DelayMessageSchema from "delay_api/db/connection/mongo/schema/delay-message";
import mongoose from "delay_api/db/connection/mongo/conn";

const DelayMessageModel = mongoose.model("DelayMessages", DelayMessageSchema);

export default DelayMessageModel;
