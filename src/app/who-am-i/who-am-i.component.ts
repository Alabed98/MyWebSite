import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  imports: [],
  templateUrl: './who-am-i.component.html',
  styleUrl: './who-am-i.component.css'
})
export class WhoAmIComponent {
  ngOnInit(){

    this.counter();
  }
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

  hours = 0;
  minutes = 0;
  seconds = 0;
  days = 35;
  year = 1;
  counter(){
    setInterval(() => {
      this.seconds ++;
      if(this.hours >= 23){
        this.days ++;
        this.hours = 0;
      }

      if(this.minutes >= 59){
        this.hours ++;
        this.minutes = 0;
      }
      if(this.seconds >= 59){
        this.minutes ++;
        this.seconds = 0;
      }
      this.updateDisplay();
    }, 1000);
  }

  updateDisplay(){
      this.count =`${this.year} year${this.year > 1 ? 's' :''}, ` 
                  +`${this.days} day${this.days>1? 's': ''} and `
                  + this.checkNumber(this.seconds)  + `${this.seconds > 1 ? ' seconds': ' second' }` ;
             
  }
  checkNumber(n:number) : string{
    return n < 10? '0' + n: n.toString();
  }

  count =this.year + "year" + this.days + "days"+ this.hours + ":" + this.minutes + ":" + this.seconds;
}
