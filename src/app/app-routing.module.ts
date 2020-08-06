import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';


const routes: Routes = [{path: 'pages/:page', component: RepositoriesListComponent},{path: '', redirectTo: 'pages/1', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
