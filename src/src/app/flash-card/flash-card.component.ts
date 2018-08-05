import {Component, OnInit} from '@angular/core';
import {FlashCard} from './flash-card.model';
import { FlashCardService} from './flash-card.service';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})

export class FlashCardComponent {
  flashCards: FlashCard[];
  constructor(private flashCardService: FlashCardService){

  }

  ngOnInit(){
    this.getCards();
  }

  getCards(): void {
      this.flashCardService.getCards()
      .subscribe(flashCards => this.flashCards = flashCards)
  }
}