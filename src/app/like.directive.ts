import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = "#708090"
   }

}
