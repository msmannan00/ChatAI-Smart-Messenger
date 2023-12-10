import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpService} from "@app/services/http.service";

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  public behaviour = new BehaviorSubject<string>('normal');
  public filter = new BehaviorSubject<string>('');
  public expanded = new BehaviorSubject<boolean>(true);
  public awaitResponse = new BehaviorSubject<boolean>(false);
  public messageHistory: { text: string; user: string ; error: boolean}[][] = [];
  public messages: { text: string; user: string ; error: boolean}[] = [];

  constructor(private httpService:HttpService) {

  }

  toggleExpanded(): void {
    this.expanded.next(!this.expanded.value);
  }

  updateBehaviour(newMessage: string): void {
    this.behaviour.next(newMessage);
  }

  updateFilter(newMessage: string): void {
    this.filter.next(newMessage);
  }

  getLastMessage(){
    if(this.messages.length>2){
      return this.messages[this.messages.length-2].text
    }else {
      return "hi"
    }
  }

  updateAwaitResponse(status: boolean): void {
    this.awaitResponse.next(status);
  }

  newChat(){
    this.messages = []
    this.addMessage({user: "bot", text: "how may i help you ?", error: false});
    this.messageHistory.push(this.messages);
    this.filter.next("");
  }

  openChat(index: number): void {
    if (index >= 0 && index < this.messageHistory.length) {
      this.messages = this.messageHistory[index];
      this.filter.next("");
    }
  }

  makeRequest(lastMessage:string, request:string){
    const behavior = this.behaviour.value;
    return this.httpService.createRequest(behavior, lastMessage, request)
  }

  addMessage(message: { text: string; user: string ; error: boolean}): void {
    this.messages.push(message);
  }

  getMessages(){
    return this.messages.filter(message => message.text.includes(this.filter.value));
  }
}
