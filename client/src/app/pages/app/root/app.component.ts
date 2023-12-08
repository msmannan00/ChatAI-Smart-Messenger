import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isToggled: boolean = true;

  toggleSidebar() {
    this.isToggled = !this.isToggled;
  }
}
