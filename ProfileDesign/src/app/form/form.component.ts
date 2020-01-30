import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  imageName:any;

  get firstName(){
    return this.profileForm.get('firstName');
  }
  get email(){
    return this.profileForm.get('email');
  }
  get mobile(){
    return this.profileForm.get('mobile');
  }
  
  constructor(private fb:FormBuilder,private formService:FormService){
    
  }
    countries=['India','China','Japan','Australia','Canada','Russia','England','USA'];
    profileForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',],
    email:['',[Validators.required,Validators.email]],
    designation:['',Validators.required],
    country:['',Validators.required],
    mobile:['',[Validators.required,Validators.minLength(10)]],
    dob:['',Validators.required],
    skill:['',Validators.required],
    hobby:['',Validators.required],
    gender:['',Validators.required],
    address:['',Validators.required],
    language:['',Validators.required],
    sscBoard:['',Validators.required],
    sscPercentage:['',Validators.required],
    sscYear:['',Validators.required],
    hscBoard:['',Validators.required],
    hscPercentage:['',Validators.required],
    hscYear:['',Validators.required],
    bscBoard:['',Validators.required],
    bscPercentage:['',Validators.required],
    bscYear:['',Validators.required],
    pgBoard:['',Validators.required],
    pgPercentage:['',Validators.required],
    pgYear:['',Validators.required],
    bio:['',Validators.required]
  });
  update(){
    this.formService.setData(this.profileForm);
    this.formService.setImage(this.imageName);
  }
  public imagePath;
  imgURL:any;
  public message: string;
  readURL(files)
  {
    if (files.length === 0)
        return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null)
    {
        this.message = "Only images are supported.";
        return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) =>
    { 
        this.imgURL = reader.result; 
    }
   this.imageName="/assets/"+files[0].name;
   //console.log(this.imageName);
  }
  ngOnInit() {
   
    
  }

}
