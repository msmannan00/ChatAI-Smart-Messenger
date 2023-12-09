import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessengerService} from "../../../services/messenger.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  @ViewChild('chatbox', { static: false }) chatbox!: ElementRef;
  messages: { text: string; user: string }[] = [];
  filteredMessages: { text: string; user: string }[] = [];
  newMessage: string = '';

  constructor(public messengerService:MessengerService) {
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.filteredMessages.push({ user: 'bot', text: this.newMessage });
      this.messages.push({ user: 'bot', text: this.newMessage });
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  private filterMessages(searchText: string): void {
    this.filteredMessages = this.messages.filter(message => message.text.includes(this.messengerService.filter.value));
  }

  onToggleSidebar(){
    this.messengerService.toggleExpanded()
  }

  ngOnInit(): void {
    this.messengerService.filter.subscribe((newFilter: string) => {
      this.filterMessages(newFilter);
    });
  }

  private scrollToBottom() {
    try {
      this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
