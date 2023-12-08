import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MessengerService} from "../../../services/messenger.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  behaviour: string = 'regular';
  search: string = ''

  constructor(public messengerService:MessengerService) {
  }

  onUpdateBehaviour(){
    this.messengerService.updateBehaviour(this.behaviour)
  }

  onUpdateSearch(searchedItem: string): void {
    this.messengerService.updateFilter(searchedItem)
  }

}
