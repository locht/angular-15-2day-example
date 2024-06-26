import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() name?: String;
  @Input() age?: Number;

  @Output() clickDel = new EventEmitter();

  delPerson = () => {
    this.clickDel.emit();
  };
}
