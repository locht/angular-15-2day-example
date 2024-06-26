import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../routing/app-routing.module';

import { AppComponent } from './app.component';
import { AppComponentOverviewCliComponent } from './app-component-overview-cli/app-component-overview-cli.component';
import { AppFormComponent } from './app-form/app-form.component';
import { ChildComponent } from './app-form/child/child.component';
import { WordsComponent } from './words/words.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { PersonComponent } from './person/person.component';
import { WeatherComponent } from './weather/weather.component';

// Serivce
import { ApiService } from 'src/service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentOverviewCliComponent,
    AppFormComponent,
    ChildComponent,
    WordsComponent,
    ListPersonComponent,
    PersonComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
