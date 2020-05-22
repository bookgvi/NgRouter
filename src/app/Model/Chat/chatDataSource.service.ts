import { Injectable } from '@angular/core';
import { Message } from './message';
import { IMessage } from './message.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ChatDataSourceService {
  private readonly messages: IMessage[] = [];

  constructor() {
    this.messages = [
      new Message(1, 'Text1'),
      new Message(2, 'Text2')
    ]
  }

  public getMessages(): Observable<IMessage[]> {
    return new Observable<IMessage[]>(observer => {
      observer.next(this.messages);
    })
  }

  public addMessage(message: IMessage): void {
    this.messages.push(message);
  }
}
