import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';

const routesConfig: Routes = [
  { path: 'contacts', component: ContactComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesConfig)],
  declarations: [ContactComponent],
})
export class ContactModule {}
