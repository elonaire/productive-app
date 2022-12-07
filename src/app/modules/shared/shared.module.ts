import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }