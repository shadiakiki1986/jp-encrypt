import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { KeysComponent } from './keys/keys.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KeysComponent,
    KeyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
