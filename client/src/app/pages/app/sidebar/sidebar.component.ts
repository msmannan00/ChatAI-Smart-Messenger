import {Component} from '@angular/core';
import {MessengerService} from "@app/services/messenger.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  behaviour: string = 'regular';
  search: string = ''

  constructor(public messengerService: MessengerService) {
  }

  onToggleSidebar() {
    this.messengerService.toggleExpanded()
  }

  onUpdateBehaviour() {
    this.messengerService.updateBehaviour(this.behaviour)
  }

  onUpdateSearch(searchedItem: string): void {
    this.messengerService.updateFilter(searchedItem)
  }

  onNewChat(){
    this.messengerService.newChat();
  }
}
