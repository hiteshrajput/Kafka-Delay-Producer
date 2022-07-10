interface ENV {
  DELAY_API_SERVER_HOST: string;
  DELAY_API_SERVER_PORT: number;
  KAFKA_PRODUCER_HOST: string;
  KAFKA_PRODUCER_PORT: number;
  REDIS_SUBSCRIBER_HOST: string;
  REDIS_SUBSCRIBER_PORT: number;
  MONGODB_URL: string;
  MONGODB_DATABASE: string;
}

export default ENV;
