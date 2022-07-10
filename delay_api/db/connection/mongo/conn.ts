import loadConfigs from "load_configs";
import mongoose from "mongoose";

mongoose.connect(
  `${loadConfigs().MONGODB_URL}${loadConfigs().MONGODB_DATABASE}`
);

export default mongoose;
