import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  ngOnInit() {    
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return {"passwd" : true};
    }
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
  }
}
