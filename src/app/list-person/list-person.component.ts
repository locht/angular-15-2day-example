import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
})
export class ListPersonComponent {
  @Output() clickDel = new EventEmitter();

  arrayPerson = [
    { name: 'Tí', age: 18 },
    { name: 'Tèo', age: 21 },
    { name: 'Tũm', age: 19 },
  ];

  clickDelPerson = (person: any) => {
    this.arrayPerson = this.arrayPerson.filter((i) => i.age !== person.age);
  };
}
