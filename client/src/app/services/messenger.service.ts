import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  public behaviour = new BehaviorSubject<string>('');
  public filter = new BehaviorSubject<string>('');
  public expanded = new BehaviorSubject<boolean>(true);
  public awaitResponse = new BehaviorSubject<boolean>(false);
  public messageHistory: { text: string; user: string }[][] = [];
  public messages: { text: string; user: string }[] = [];

  constructor() {}

  toggleExpanded(): void {
    this.expanded.next(!this.expanded.value);
  }

  updateBehaviour(newMessage: string): void {
    this.behaviour.next(newMessage);
  }

  updateFilter(newMessage: string): void {
    this.filter.next(newMessage);
  }

  updateAwaitResponse(status: boolean): void {
    this.awaitResponse.next(status);
  }

  newChat(){
    this.messages = []
    this.addMessage({user: "bot", text: "how may i help you ?"});
    this.messageHistory.push(this.messages);
  }

  openChat(index: number): void {
    if (index >= 0 && index < this.messageHistory.length) {
      this.messages = this.messageHistory[index];
    } else {
      console.error("Invalid index:", index);
    }
  }

  addMessage(message: { text: string; user: string }): void {
    this.messages.push(message);
  }

  getMessages(){
    return this.messages.filter(message => message.text.includes(this.filter.value));
  }
}
