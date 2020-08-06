import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { RepositoryItemComponent } from './repositories-list/repository-item/repository-item.component';
import { RepositoryPaginationComponent } from './repositories-list/repository-pagination/repository-pagination.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RepositoriesListComponent,
    RepositoryItemComponent,
    RepositoryPaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
