import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-experience2',
  imports: [],
  templateUrl: './experience2.component.html',
  styleUrl: './experience2.component.css'
})
export class Experience2Component {
  @ViewChildren('highlightText') texts!:QueryList<ElementRef<HTMLElement>>;
  @ViewChild('e') typedElement!:ElementRef;

  ngAfterViewInit(){
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          
    const type = {
      strings:['Past and Current Experience'],
      typeSpeed:30,
      }  
    new Typed(this.typedElement.nativeElement, type);
        }
      })
    })

    observer.observe(this.typedElement.nativeElement)
  }


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
