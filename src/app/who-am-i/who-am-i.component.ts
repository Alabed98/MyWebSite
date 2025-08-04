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
  days = 0;
  year = 0;
  startDate:Date = new Date('2024-07-01T00:00:00Z');

  
  counter(){  
    const currentDate = new Date();
    const diff = currentDate.getTime() - this.startDate.getTime();
    const totalSeconds = Math.floor(diff / 1000);
    this.year = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    this.days = Math.floor((totalSeconds/60/60/24) % 365);
    this.hours = Math.floor(((totalSeconds/60/60) % 24) % 365);
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;

    setInterval(() => {
          this.seconds++;

    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    }

    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }

    if (this.hours >= 24) {
      this.hours = 0;
      this.days++;
    }

    if(this.days >= 365){
      this.days = 0;
      this.year++;
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
