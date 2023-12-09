import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessengerService} from "@app/services/messenger.service";
import {HttpService} from "@app/services/http.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chatbox', {static: false}) chatbox!: ElementRef;

  messageModel: string = '';

  constructor(public messengerService: MessengerService, private httpService:HttpService) {
  }

  ngOnInit(): void {
    this.messengerService.newChat();
  }

  generateMessage(type:string, message:string){
    this.messengerService.addMessage({user: type, text: message})
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.messageModel.trim() !== '' && !this.messengerService.awaitResponse.value) {
      this.generateMessage("user", this.messageModel)
      this.messageModel = '';
      this.requestChatGPTResponse();
    }
  }

  requestChatGPTResponse(){
    this.messengerService.updateAwaitResponse(true);
    setTimeout(() => {
      this.generateMessage("bot", "dummy message")
      this.messengerService.updateAwaitResponse(false);
    }, 2000);
  }

  onToggleSidebar() {
    this.messengerService.toggleExpanded()
  }

  private scrollToBottom() {
    try {
      this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
