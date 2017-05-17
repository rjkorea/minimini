import { Directive, ElementRef, Attribute, HostListener, HostBinding, NgZone } from '@angular/core';

@Directive({ selector: '[whenScrolled]' })
export class whenScrolledDirective {

  constructor(private el: ElementRef, private attr: Attribute, private zone: NgZone) {}
  // @HostBinding('scroll') getScroll() {
  //   let raw = this.el[0];
  //   if(raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
  //     this.zone.run(() => {});
  //   }
  // }

  @HostListener('scroll') scrolling() {
    console.log('scrolling')
  }
}