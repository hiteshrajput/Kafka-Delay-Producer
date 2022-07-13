import { Kafka, logLevel } from "kafkajs";
import loadConfigs from "load_configs";

const { KAFKA_CLIENT_ID, KAFKA_BROKERS } = loadConfigs();

const kafka = new Kafka({
  clientId: KAFKA_CLIENT_ID,
  brokers: KAFKA_BROKERS,
  logLevel: logLevel.ERROR,
});

export default kafka;
