import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('chatbox', { static: false }) chatbox!: ElementRef;
  filteredMessages: { text: string; user: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.filteredMessages.push({ user: 'user', text: this.newMessage });
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  private scrollToBottom() {
    try {
      this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
