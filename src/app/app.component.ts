import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntropageComponent } from './intropage/intropage.component';
import { GamepageComponent } from './gamepage/gamepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntropageComponent, GamepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  currentPage: string = 'introPage';
  currentPlayerName: string = '';
  currentPlayerEmail: string = '';
  currentPoints: number = 0;

  startGame(event: { playerName: string; playerEmail: string }) {
    this.currentPlayerName = event.playerName;
    this.currentPage = 'gamePage';
    this.currentPlayerEmail = event.playerEmail;
  }

  exitGame() {
    this.currentPage = 'introPage';
  }

}
