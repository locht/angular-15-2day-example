import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContactModule } from '../app/contact/contacts.module';

import { ContactDetailComponent } from '../app/contact-detail/contact-detail.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

const routesConfig: Routes = [
  { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ContactModule, RouterModule.forRoot(routesConfig), CommonModule],
  declarations: [ContactDetailComponent, PageNotFoundComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
