import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomDateTimeComponent } from './custom-date-time/custom-date-time';
@NgModule({
	declarations: [ CustomDateTimeComponent ],
	imports: [ IonicModule ],
	exports: [ CustomDateTimeComponent ]
})
export class ComponentsModule {}
