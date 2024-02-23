import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepageComponent } from './gamepage.component';

describe('GamepageComponent', () => {
  let component: GamepageComponent;
  let fixture: ComponentFixture<GamepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
