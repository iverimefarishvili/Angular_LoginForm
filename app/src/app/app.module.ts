import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ContactComponent,
    MessageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
