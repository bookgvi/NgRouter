import { AfterContentInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChatRepository } from '../../Model/Chat/chat.repository';
import { IMessage } from '../../Model/Chat/message.interface';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HTMLEventObservableService } from '../../Services/HTMLEventObservable.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [HTMLEventObservableService]
})
export class ChatComponent implements OnInit, OnDestroy, AfterContentInit {
  private subscription: Subscription;

  constructor(
    private chat: ChatRepository,
    private HTMLEvent: HTMLEventObservableService
  ) { }

  @ViewChild('inputMessage', { static: true })
  private inputTAG: HTMLInputElement;


  ngOnInit() {
  }

  ngAfterContentInit() {
    this.subscription = this.HTMLEvent.fromEvent(this.inputTAG['nativeElement'], 'input')
      .pipe(
        debounceTime(2000)
      )
      .subscribe(e => {
        this.chat.addMessage = e.target.value;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public get chatHistory(): IMessage[] {
    return this.chat.getMessages;
  }

}
