import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDoNothing]'
})
export class DoNothingDirective implements OnInit {

  @Input('title')
  title: string = 'titi';

  constructor(
    private ref: ElementRef
  ) {
    console.log('DoNothingDirective');
    (ref.nativeElement as HTMLHeadElement).style.backgroundColor = 'yellow';


    (ref.nativeElement as HTMLHeadElement).addEventListener('click', () => {
    })

  }
  ngOnInit(): void {
    (this.ref.nativeElement as HTMLHeadElement).innerHTML = this.title;
  }

}
