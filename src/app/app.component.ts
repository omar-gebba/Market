import { Component } from '@angular/core';
import { trigger, group, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slid-routing', [
      transition('0=>1, 0=>2, 0=>3, 1=>2, 1=>3, 2=>3', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(-100%)'
            }),
            animate(1000, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(1000, style({
              transform: 'translateX(100%)'
            }))
          ])
        ])
      ]),
      transition('3=>2, 3=>1, 3=>0, 2=>1, 2=>0, 1=>0', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(1000, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(1000, style({
              transform: 'translateX(-100%)'
            }))
          ])
        ])
      ])

    ])
  ]
})
export class AppComponent {
  title = 'Market';
}
