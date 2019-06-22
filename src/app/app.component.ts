import { Component } from '@angular/core';
import { MyserviceService} from './myservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project!';
  todaydate;
  componentproperty;
  emailid;
  formdata;
  constructor(private myservice: MyserviceService) { }
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
    });
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
  }
}
