import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // @Input() userName = '';
  _userName: string | undefined;
  @Input() set userName(value: string) {
    console.log('value', value);
    this._userName = value;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges', changes);
  //   if (!changes['userName'].isFirstChange()) {
  //     if (changes['userName'].currentValue === 'Chris') {
  //       this.userName = 'Hello ' + this.userName;
  //     } else {
  //       this.userName = changes['userName'].previousValue;
  //     }
  //   }
  // }
}
