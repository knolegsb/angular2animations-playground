import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <br/><br/>&nbsp;&nbsp;<button class="btn btn-default" [@myTrigger]='state' (click)='toggleState()'>My Button</button>
    <ul>
      <li *ngFor="let item of items" [@myTrigger] = 'state'>{{item}}</li>
    </ul>
  `,
  styles: [
    `ul {list-style-type:none; margin: 30px 30px 0 0; padding: 0;}
    li {
      padding: 15px;
      width: 100%;
      background: #f1f1f1;
      margin-bottom: 2px;
      font-weight: bold;
    }`
  ],
  animations: [
    trigger('myTrigger', [
            state('small', style({
                transform: 'scale(1)'
            })),
            state('large', style({
                transform: 'scale(1.4)'
            })),
            state('extra-large', style({
                transform: 'scale(2)'
            })),
            state('fadeIn', style({
                opacity: '1'
                //transform: 'scale(1.2)'
            })),
            //transition('* => *', animate('500ms')),
            transition('void => *', [
                //style({ opacity: '0', transform: 'translateY(20px)' }),
                //animate('500ms 0 ease-in')
                animate(500, keyframes([
                  style({opacity: 0, transform: 'translate(-30px)', offset: 0}),
                  style({opacity: 1, transform: 'translateY(5px) scale(1.2)', offset: .3}),
                  style({opacity: 1, transform: 'translateY(0)', offset: 1})
                ]))
            ])
        ])
  ]
})
export class AppComponent  { 
  state: string = 'small';
  items = ['item1', 'item2', 'item3'];

  toggleState(){
    //this.state = (this.state === 'small' ? 'large':'small');
    this.items.push('another item');
    this.state = "fadeIn";
  }
}
