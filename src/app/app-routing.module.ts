import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesSamplePageComponent } from './pipes-sample-page/pipes-sample-page.component';

const routes: Routes = [{
  component:PipesSamplePageComponent,
  path:'pipes-sample'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
