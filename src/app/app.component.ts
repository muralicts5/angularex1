import { Component } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularEx1';
  employee:any={};

  notifyEmployee($event:any){
    console.log('$event')

    console.log($event)
    this.employee=$event;
  }

}
