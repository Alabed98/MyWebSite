import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-tools',
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent implements AfterViewInit{

  @ViewChildren('changePlace') elements!:QueryList<ElementRef<HTMLElement>>  
  ngAfterViewInit() {
    gsap.utils.toArray<HTMLElement>('.logo').forEach((logo, i) => {
      gsap.fromTo(logo,
        { y: -50, opacity: 0 },
        {
          y: 50,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.logo',
            start: 'top 80%',
            scrub: true
          },
          delay: i * 0.2
        });
    });
  }

}
