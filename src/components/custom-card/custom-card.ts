import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-card',
  templateUrl: 'custom-card.html'
})
export class CustomCardComponent {

  @Input() headerText: string;
  @Input() contentText: string;

  constructor() {

  }

}
