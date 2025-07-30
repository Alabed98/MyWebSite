import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
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
