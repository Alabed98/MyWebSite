import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { WhoAmIComponent } from "./who-am-i/who-am-i.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ToolsComponent } from "./tools/tools.component";
import { FirstViewComponent } from "./first-view/first-view.component";
import { Experience2Component } from "./experience2/experience2.component";
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from "./social-media/socialMedia.component";
import { ContactComponent } from "./contact/contact.component";

declare var WOW: any;
@Component({
  selector: 'app-root',
  imports: [WhoAmIComponent, ExperienceComponent, ToolsComponent, FirstViewComponent, Experience2Component, CommonModule, SocialMediaComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Abdulrahman Alabed';
  visible = false;
  ngOnInit() {
    new WOW().init();
  }
}
