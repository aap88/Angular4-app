import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MyserviceService } from './myservice.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4-app Ale';
  todaydate;
  componentproperty;
  constructor(private http:Http) {}
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").map((response) => response.json()).subscribe((data) => console.log(data))
    //this.todaydate = this.myservice.showTodayDate();
    //console.log(this.myservice.serviceproperty);
    //this.myservice.serviceproperty = "component created";
    //this.componentproperty = this.myservice.serviceproperty;
  }
  jsonval = {name: 'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = true;

  myClickFunction(event) {
    alert("Buttons is clicked!");
    console.log(event);
  }

  changemonths(event) {
    //console.log("Changed month from the Dropdown");
    //console.log(event);
    alert("Change month from the Dropdown");
  }
}
