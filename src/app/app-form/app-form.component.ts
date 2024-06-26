import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css'],
})
export class AppFormComponent {
  name = '';
  isHighlight = false;
  evenStyle = { color: 'red', fontSize: '30px' };
  oddStyle = { color: 'blue', fontSize: '14px' };
  // currentClass: { circle: boolean; square: boolean };
  currentClass = { circle: !this.isHighlight, square: this.isHighlight };
  isNgIf = false;
  arrSubjects = ['Angular', 'Node', 'React'];

  handleShowSubject = () => {
    this.isNgIf = !this.isNgIf;
  };

  userName = 'Maria';

  updateUser() {
    this.userName = 'Chris';
  }

  handleClick = () => {
    this.isHighlight = !this.isHighlight;
    this.currentClass = { circle: !this.isHighlight, square: this.isHighlight };
    console.log('handleClick', this.name, this.isHighlight);
  };
}
