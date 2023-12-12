import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessengerService} from "@app/services/messenger.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chatbox', {static: false}) chatbox!: ElementRef;
  private requestSubscription: Subscription;

  messageModel: string = '';

  constructor(public messengerService: MessengerService) {
  }

  ngOnInit(): void {
    this.messengerService.newChat();
  }

  generateMessage(type: string, message: string, error: boolean) {
    this.messengerService.addMessage({user: type, text: message, error})
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.messageModel.trim() !== '' && !this.messengerService.awaitResponse.value) {
      this.generateMessage("user", this.messageModel, false)
      this.requestChatGPTResponse(this.messengerService.getLastMessage(), this.messageModel);
      this.messageModel = '';
    }
  }

  stopMessage() {
    if (this.requestSubscription) {
      this.messengerService.updateAwaitResponse(false);
      this.requestSubscription.unsubscribe();
    }
  }

  requestChatGPTResponse(lastMessage: string, request: string) {
    this.messengerService.updateAwaitResponse(true);

    if (this.requestSubscription) {
      this.requestSubscription.unsubscribe();
    }
    this.requestSubscription = this.messengerService.makeRequest(lastMessage, request).subscribe({
      next: (response) => {
        if (Array.isArray(response) && response.length > 0) {
          const generatedText = response[0]['original']['generated_text'];
          this.generateMessage("bot", generatedText, false);
        }
        this.messengerService.updateAwaitResponse(false);
      },
      error: (error: any) => {
        this.generateMessage("bot", JSON.stringify(error.error).toString(), true);
        this.messengerService.updateAwaitResponse(false);
      }
    });
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
