import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateTime } from 'ionic-angular';

@Component({
  selector: 'custom-date-time',
  templateUrl: 'custom-date-time.html'
})
export class CustomDateTimeComponent {

  @Input() public label: string;
  @Input() public value: string;
  @Input() public displayFormat: string = 'DD/MM/YYYY';
  @Input() public pickerFormat: string = 'DD MM YYYY';
  @Input() public cancelText: string = 'Cancelar';
  @Input() public doneText: string = 'Confirmar';
  @Input() public placeholder : string = '';

  @Output() public update: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  cancel(): void {
    console.log('cancel');
  }

  change(): void {
    this.update.emit(this.value);
  }

}
