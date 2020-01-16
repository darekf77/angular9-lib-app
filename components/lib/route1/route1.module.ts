import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route1Component } from './route1.component';
import { Routes, RouterModule } from '@angular/router';

console.log('dynamic route!')
// alert('loaded async')

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Route1Component
      }
    ])
  ],
  declarations: [Route1Component]
})
export class Route1Module { }
