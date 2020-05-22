import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HTMLEventObservableService {
  public fromEvent(target: HTMLElement, eventName: string): Observable<any> {
    return new Observable<any>(observer => {
      const handler = e => observer.next(e);
      target.addEventListener(eventName, handler);
      return () => {
        target.removeEventListener(eventName, handler);
      }
    })
  }

}
