import { Injectable } from '@angular/core';
import { ChatDataSourceService } from './chatDataSource.service';
import { IMessage } from './message.interface';

@Injectable()
export class ChatRepository {
  private chatMessages: IMessage[];
  constructor(private chat: ChatDataSourceService) {
    this.chat.getMessages().subscribe(data => this.chatMessages = data)
  }

  public get getMessages(): IMessage[] {
    return this.chatMessages;
  }

  public set addMessage(text: string) {
    const id = this.chat.getMessages()['length'];
    this.chat.addMessage({ id, text });
  }
}
