import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intropage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './intropage.component.html',
  styleUrl: './intropage.component.scss'
})
export class IntropageComponent {
  
  @Output() startGameEvent = new EventEmitter<{
    playerName: string;
    playerEmail: string;
  }>();

  startGame(data: { playerName: string; playerEmail: string }) {
    this.startGameEvent.emit(data);
  }
}
