import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MessengerService} from "@app/services/messenger.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SidebarComponent implements OnInit{
  behaviour: string = 'normal';
  search: string = ''

  constructor(public messengerService: MessengerService) {
  }

  ngOnInit(): void {
    this.messengerService.filter.subscribe((filter) => {
      this.search = filter;
    });
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
