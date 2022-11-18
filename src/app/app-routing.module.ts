import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveSamplePageComponent } from './directive-sample-page/directive-sample-page.component';
import { PipesSamplePageComponent } from './pipes-sample-page/pipes-sample-page.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [{
  component:PipesSamplePageComponent,
  path:'pipes-sample'
},
{
  component:DirectiveSamplePageComponent,
  path:'directive-sample'
},
 {
  component:TemplateFormComponent,
  path:'template-form'
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
