import { Component, OnInit } from '@angular/core';
import { ChatRepository } from '../../Model/Chat/chat.repository';
import { IMessage } from '../../Model/Chat/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  constructor(private chat: ChatRepository) { }

  ngOnInit() {
  }

  public get chatHistory(): IMessage[] {
    return this.chat.getMessages;
  }

}
