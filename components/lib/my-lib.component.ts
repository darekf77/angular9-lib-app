import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
    <button (click)="route1()" > Router1 </button>
      <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }

  route1() {
    this.router.navigateByUrl(`/route1`)
  }

}
