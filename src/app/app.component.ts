import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: any;
  public version = 1;
  public srcImg = {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk'
  }

  constructor() {
    setTimeout(() => {
      this.title = {
        caption: 'syntaxe'
      };
    }, 1000);
  }

  public handleKeydown(event: KeyboardEvent) {
    console.log(event);
    
  }


  public handleClick(event: MouseEvent, input: HTMLInputElement): void {
    console.log(event);
    console.log(input);

    event.preventDefault();
    event.stopPropagation();

    console.log('clicked');
  }
}
