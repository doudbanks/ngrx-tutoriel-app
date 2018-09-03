import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { REDUCR_TOKEN, getReducers } from './store';
import { ReactiveFormsModule, FormsModule } from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
		FormsModule,
    StoreModule.forRoot(REDUCR_TOKEN)
  ],
  providers: [
    {
      provide: REDUCR_TOKEN,
      useFactory: getReducers
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
