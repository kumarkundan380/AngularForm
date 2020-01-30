import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  imageName:any;
  constructor() { }
  profileData:FormGroup;
  setData(profileData:FormGroup){
    this.profileData=profileData;
    console.log(profileData.value);
  }
  getData(){
    return this.profileData;
  }
  setImage(img:any){
    this.imageName=img;
    console.log("set image");

  }
  getImage(){
    console.log("in service image");
    return this.imageName;
  }
}
