import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

// Directiveler html sahip değil ihtiyaçları yok.
// Bir html elemente özellik kazandırmak için kullanılır.
// genelde tasarımsal işlemleri merkezi bir yerden yönetiriz. 

@Directive({
  selector: '[dangerLabel]'
})
export class DangerLabelDirective {



  constructor(private el:ElementRef, private renderer2:Renderer2) { 

    // el directive uygulanacak element instance,
    // renderer2 ile Html Doma bağlanıp elemnte özellikler kazandırabiliriz.

    this.renderer2.setStyle(el.nativeElement,'color','red');
    this.renderer2.setStyle(el.nativeElement,'font-size','12px');
    this.renderer2.setStyle(el.nativeElement,'padding','5px');
  }

  // directive HostBinding ile event bağlayabilirsiniz. windows eventi olmalı
  // Js tarafında AddEventListener yapıyoruz
  @HostListener('mouseover')
  mouseDown(){
    this.renderer2.setStyle(this.el.nativeElement,'font-size','16px');
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.renderer2.setStyle(this.el.nativeElement,'font-size','12px');
  }

}
