import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
    selector: 'popover-content',
    templateUrl: 'popover-content.html'
})
export class PopoverContentPage {
    constructor(private viewCtrl: ViewController) { }

    onItemClick(item: string) {
        this.viewCtrl.dismiss({value: item});
    }
}