import { Schema } from "mongoose";

const PayloadSchema: Schema = new Schema({
  message: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
});

const DelayMessageSchema: Schema = new Schema({
  delayTime: {
    type: Number,
    required: true,
  },
  payload: PayloadSchema,
});

export default DelayMessageSchema;
