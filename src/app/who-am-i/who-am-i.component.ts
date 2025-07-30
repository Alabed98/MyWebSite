import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  imports: [],
  templateUrl: './who-am-i.component.html',
  styleUrl: './who-am-i.component.css'
})
export class WhoAmIComponent {

  @ViewChildren('highlightText') texts!:QueryList<ElementRef<HTMLElement>>;


  @HostListener('window:scroll')
  updateHighlight(){
    this.texts.forEach(e =>{
    const element = e.nativeElement;
    const rect = element.getBoundingClientRect();

    const midScreen = window.innerHeight / 2;
    const isInBand = rect.top > midScreen && rect.top < midScreen + 130;
    element.style.filter = isInBand? 'brightness(1)': 'brightness(0.5)'
    })
  }

}
