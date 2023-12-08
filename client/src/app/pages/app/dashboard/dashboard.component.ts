import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MessageDisplayComponent} from "../message-display/message-display.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    MessageDisplayComponent,
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('chatbox', { static: false }) chatbox!: ElementRef;
  filteredMessages: { text: string; user: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.filteredMessages.push({ user: 'User', text: this.newMessage });
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
