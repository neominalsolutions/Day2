import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PipesSamplePageComponent } from './pipes-sample-page/pipes-sample-page.component';
import { GenderPipe } from './gender.pipe';
import { DangerLabelDirective } from './danger-label.directive';
import { DirectiveSamplePageComponent } from './directive-sample-page/directive-sample-page.component';


// Template drive form kullanırken FormsModule ile çalışıyoruz
// Reactive form kullanırken ReactiveFormsModule ile çalışıyoruz
// Declarations kısmında Pipe,Directive ve Component
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    PipesSamplePageComponent,
    GenderPipe,
    DangerLabelDirective,
    DirectiveSamplePageComponent
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
