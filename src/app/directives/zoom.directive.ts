import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective implements OnInit {
  
  @Input('size')
  size: number

  constructor(private ref: ElementRef<HTMLElement>) {
    console.log('ZoomDirective');

  }

  ngOnInit(): void {
    this.normalSize = this.ref.nativeElement.style.fontSize.match(/\d+/)[0];
    console.log(this.normalSize);
  }

  private normalSize;

  @HostListener('mouseover')
  private onmouseover() {

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
