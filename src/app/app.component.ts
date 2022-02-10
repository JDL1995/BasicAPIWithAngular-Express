import { Component, OnInit } from '@angular/core';
//Import our HttpService which serves to send data to the backend api
import { HttpServiceService } from './http-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //Define the service in the constructor to use it in the component;
  constructor( public HTTP:HttpServiceService){}
  title = 'basicApp';
  public default= "Default Text";
  //FormGroup is a way of identifying a form to retrieve its values.  Declaring it publicly makes it available in any function;
  public newData!:string;
  public oldData!:string;
  public form!: FormGroup;
ngOnInit(){
//initialize the formGroup with the formcontrol data to hold our sstring
this.form=new FormGroup({data: new FormControl('')})

}
//sendData is the function called when the form is submitted
sendData(){
  //The value of the "data" field is access via this.form.value.data
  let data = this.form.value.data;
  //send the form data to the httpService we created
  //in the parentheses (data)
  //then the result is always in the form of an rxjs subscription
this.HTTP.sendData(data).subscribe(result=>{
  console.log(result);
  let res = JSON.parse(JSON.stringify(result));
  this.oldData=res.oldData;
  this.newData=res.newData;

})
}

}
