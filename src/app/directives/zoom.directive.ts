import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective implements OnInit {

  @Input('size')
  private size: number

  private normalSize;

  constructor(private ref: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    // console.log(getComputedStyle(this.ref.nativeElement).fontSize);
    this.normalSize = this.ref.nativeElement.style.fontSize.match(/\d+/)[0];
    // console.log(this.normalSize);
  }


  @HostListener('mouseover', ['$event'])
  private onmouseover(event: MouseEvent) {   
    console.log(event.target == this.ref.nativeElement);
    this.ref.nativeElement.style.fontSize = this.size + 'px';
  }


  @HostListener('mouseleave')
  private onmouseleave() {
    this.ref.nativeElement.style.fontSize = (this.normalSize) + 'px';
  }

  @HostListener('dblclick')
  private onDblClick() {
    console.log('dblclick catched');
  }






}
