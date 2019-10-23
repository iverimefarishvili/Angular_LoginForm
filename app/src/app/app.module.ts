import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ChildComponent } from './child/child.component';
import { PersonalComponent } from './personal/personal.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ChildComponent,
    PersonalComponent,
    MessageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
