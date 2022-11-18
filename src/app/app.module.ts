import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PipesSamplePageComponent } from './pipes-sample-page/pipes-sample-page.component';
import { GenderPipe } from './gender.pipe';


// Template drive form kullanırken FormsModule ile çalışıyoruz
// Reactive form kullanırken ReactiveFormsModule ile çalışıyoruz

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    PipesSamplePageComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
