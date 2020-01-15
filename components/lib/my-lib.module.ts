import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { Routes, RouterModule } from '@angular/router';


import { Route1Module } from "./route1/route1.module";

@NgModule({
  declarations: [MyLibComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'route1',
            // loadChildren: './route1/route1.module#Route1Module',
            // loadChildren: () => import('./route1/route1.module').then(m => m.Route1Module)
            loadChildren: () => Route1Module
          }
        ]
      }
    ])
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
