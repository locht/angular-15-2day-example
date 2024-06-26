import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  arrayContacts = [
    { id: 1, name: 'Tèo', phoneNumber: 1922 },
    { id: 2, name: 'Tí', phoneNumber: 4564 },
    { id: 3, name: 'Tũm', phoneNumber: 1232 },
  ];

  ngOnInit(): void {}
}
