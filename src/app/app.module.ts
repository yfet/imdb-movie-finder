import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { FinderFormComponent } from './components/movie/finderForm.component';
import { MovieListComponent } from './components/movie/movieList.component';
import { MovieComponent } from './components/movie/movie.component';
import { AjaxLoaderComponent } from './components/utils/ajaxLoader.component';

import { MovieService } from './components/movie/service/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    FinderFormComponent,
    MovieListComponent,
    MovieComponent,
    AjaxLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
