interface PAYLOAD {
  topic: string;
  message: string;
}

interface DELAY_MESSAGE {
  payload: PAYLOAD;
  delayTime: number;
}

export type DelayMessage = DELAY_MESSAGE;
export type Payload = PAYLOAD;
