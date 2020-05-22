import { IMessage } from './message.interface';

export class Message implements IMessage {
  constructor(
    public id: number,
    public text: string
  ) {
  }
}
