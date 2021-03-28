import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = "#A9A9A9"
   }

}
