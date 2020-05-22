import { NgModule } from '@angular/core';
import { ChatDataSourceService } from '../Model/Chat/chatDataSource.service';
import { ChatRepository } from '../Model/Chat/chat.repository';

@NgModule({
  providers: [ChatDataSourceService, ChatRepository]
})
export class ChatModelModule {}
