import {Injectable, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  public behaviour = new BehaviorSubject<string>('');
  public filter = new BehaviorSubject<string>('');
  public expanded = new BehaviorSubject<boolean>(true);

  constructor() {

  }

  updateBehaviour(newMessage: string): void {
    this.behaviour.next(newMessage);
  }


  updateFilter(newMessage: string): void {
    this.filter.next(newMessage);
  }

}
