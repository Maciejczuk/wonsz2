import { Component, EventEmitter, Input, Output, ViewChild, HostListener } from '@angular/core';
import { NgxSnakeComponent, NgxSnakeModule } from 'ngx-snake';

@Component({
  selector: 'app-gamepage',
  standalone: true,
  imports: [NgxSnakeModule],
  templateUrl: './gamepage.component.html',
  styleUrl: './gamepage.component.scss'
})
export class GamepageComponent {
  @Input() playerName: string = '';
  @Output() exitGameEvent = new EventEmitter<void>();
  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;
  public color = '';
  public points: number = 0;
  public timeInSeconds: number = 0;
  public timer: any;
  public gameStatus: string = 'Zaczynajmy!';


  exitGame() {
    this.exitGameEvent.emit();
  }
  
  public startButton() {
    this.timeInSeconds = 0;
    this._snake.actionStart();
    this.timer = setInterval(() => {
      this.timeInSeconds++;
    }, 1000);
    this.gameStatus = "Gra rozpoczęta";
    this.color = 'green';

  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'm':
        this.resetButton();
        break;
      case ' ':
        this.stopButton();
        break;
      case 'Enter':
        this.startButton();
        break;
      case 'ArrowUp':
        this.upButton();
        break;
      case 'ArrowDown':
        this.downButton();
        break;
      case 'ArrowLeft':
        this.leftButton();
        break;
      case 'ArrowRight':
        this.rightButton();
        break;
      default:
        break;
    }
  }


  public stopButton() {
    this._snake.actionStop();

    clearInterval(this.timer);
    this.gameStatus = "Przerwa?";
    this.color = 'orange';
  }

  public resetButton() {
    this._snake.actionReset();
    clearInterval(this.timer);
    this.timeInSeconds = 0;
    this.gameStatus = "Gotowy do gry";
    this.color = 'green';

  }

  public upButton() {
    this._snake.actionUp();
  }

  public downButton() {
    this._snake.actionDown();
  }

  public leftButton() {
    this._snake.actionLeft();
  }

  public rightButton() {
    this._snake.actionRight();
  }
  public onGrow() {

    this.points += 1; 

  }
  public onGameOver() {
    alert('Przegrałeś! może spróbuj raz jeszcze');
    this.gameStatus = "Ready";
    clearInterval(this.timer);
    this._snake.actionReset();
  }

}
