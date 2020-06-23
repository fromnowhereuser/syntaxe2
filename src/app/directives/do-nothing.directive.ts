import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDoNothing]'
})
export class DoNothingDirective implements OnInit {

  @Input('title')
  title: string = 'titi';

  @HostListener('dblclick')
  dblclickHandler() {
    console.log('double click');
  }

  constructor(
    private ref: ElementRef
  ) {
    console.log('DoNothingDirective');
    (ref.nativeElement as HTMLHeadElement).style.backgroundColor = 'yellow';
  }
  
  ngOnInit(): void {
    (this.ref.nativeElement as HTMLHeadElement).innerHTML = this.title;
  }

}
