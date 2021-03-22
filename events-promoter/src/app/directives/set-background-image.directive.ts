import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[setBackgroundImage]',
})

export class setBackgroundImageDirective {

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {

    let el = this.elementRef.nativeElement;

    renderer.setStyle(el, "background-repeat", "no-repeat");
    renderer.setStyle(el, "background-size", "cover"); 
    renderer.setStyle(el, "width", "100%");
    renderer.setStyle(el, "height", "100%");
    renderer.setStyle(el, "padding-top", "1%");

  }

}




