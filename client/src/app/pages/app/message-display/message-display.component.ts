import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  standalone: true,
  styleUrl: './message-display.component.css'
})
export class MessageDisplayComponent {
  @Input() text: string = '';
  @Input() user: string = '';
}
