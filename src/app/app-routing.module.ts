import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewerComponent} from './viewer/viewer.component';
import {MainComponent} from './main/main.component';
import {HelpComponent} from './help/help.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'faq', component: HelpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
