import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FlashCard } from './flash-card.model';
import { FLASHCARDS } from '../mock-flashcards';

@Injectable()
export class FlashCardService {

  constructor() { }
  getCards(): Observable<FlashCard[]> {
    let flashCards = of(FLASHCARDS);
    return flashCards;
  }
}