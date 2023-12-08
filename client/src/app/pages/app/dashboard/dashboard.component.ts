import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('chatbox', { static: false }) chatbox!: ElementRef;
  searchTerm:string='';
  modes: string[] = ['Formal Mode', 'Casual Mode', 'Humorous Mode', 'Assistance Mode', 'Learning Mode'];
  messages: { text: string; user: string }[] = [];
  filteredMessages: { text: string; user: string }[] = [ { text: 'Hello, how can I help you?', user: 'bot' }];

  userMessage: string = '';
  typing: boolean = false;

  stopRequested: boolean = false;

  sendMessage() {
    if (this.userMessage.trim() !== '') {
      this.typing = true;
      this.stopRequested = false;
      setTimeout(() => {
        if (this.stopRequested) {
          this.typing = false;
          return;
        }
        this.messages.push({ text: this.userMessage, user: 'user' });
        this.filteredMessages= this.messages;
        this.typing = false;
        this.userMessage = '';
        this.scrollToBottom();
        setTimeout(() => {
          if (this.stopRequested) {
            return;
          }
          this.messages.push({ text: 'Sure, let me check...', user: 'bot' });
          this.filteredMessages= this.messages;
        }, 1000);
      }, 5000);
    }
  }

  viewHistory() {
    console.log('View History clicked');
  }

  selectMode(mode: string) {
    switch (mode) {
      case 'Formal Mode':
        break;
      case 'Casual Mode':
        break;
      case 'Humorous Mode':
        break;
      case 'Assistance Mode':
        break;
      case 'Learning Mode':
        break;
      default:
        console.log('Invalid mode selected');
    }
  }
  
  searchMessages() {
    if(this.messages.length > 0){
      const trimmedSearchTerm = this.searchTerm.trim().toLowerCase();
      this.filteredMessages = this.messages.filter(message =>
        message.text.toLowerCase().includes(trimmedSearchTerm)
      );
    }
  }
  
  stopTyping() {
    this.stopRequested = true;
  }
  
  private scrollToBottom() {
    try {
      this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
