import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel, Validators } from '@angular/forms';


export interface User {
  username:string;
  email:string;
  phone:string;
  website?:string;
}


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {


  model:User = { username:'', email:'ali.can', website:'', phone:'0545211236'};

  // html tarafındaki idlere typescript tarafında erişip bir işlem yapmak için viewChild yani view üzerindeki bir component bir element olabilir # ile erişim sağlandık. ref refransın üzerinden işlem yaptık
  // ilgili component template üzerinden bir child elemente erişim sağlar.
  @ViewChild('username') username!:NgModel;
  @ViewChild('email') email!:NgModel;
  // ilk değer template ismi ikinci değer ts değişken ismi
  @ViewChild('userCreateForm') userCreateForm!:NgForm;

  constructor() { }

  ngOnInit(): void {
    // ilk sayfa yüklendiğinde çalışan yer
    console.log('username1',this.userCreateForm?.value);
  }

  // logicsel olarak bir api istek durumlarında aşağıdaki gibi form üzerinden belirli alanlara göre işlem yapılacaktır
  onSubmit(userCreateForm:NgForm){

    this.username.reset();
    
      console.log('userCreateForm', userCreateForm);

      // ekstra bir kontrol amaçlı form bilgilerini NgForm üzerinden kontrol edelim.
      if(userCreateForm.valid){
        // api request at
      }

     const emailError = this.username.hasError('email'); // hata var mı yok mu kontrolü

     console.log('emailError', emailError);
     console.log('email-value', this.userCreateForm.form.get('email')?.value);
   

     // bazı durumlarda ilgili form alanı için validayon tanımlanmış mı gibi controller yapmamız gerekebilir. aşağıdaki örnek ile validasyon kontrolü yapılır.
     this.userCreateForm.form.get('username')?.hasValidator(Validators.required);

     console.log('username3',this.userCreateForm.form.get('username')?.hasValidator(Validators.required))

     // istenilen durumda ise dinamik olarak validator tanımlama işlemi yapabiliriz.
     this.userCreateForm.form.get('username')?.addValidators(Validators.maxLength(50));
     //this.userCreateForm.form.reset(); // formu resetlemek için
     this.userCreateForm.form.clearValidators(); // tüm validasyonları kaldır.

  }

  onModelChange(value:string){
    console.log('event.target.value',value);
    // özel bir kontrolden geçirip bir işlem yapak istedeiğimizde
    this.model.phone = value;


  }

  setValue(){
    //ngModel üzerinden erişim
    this.username.control.setValue('ali');
    // form üzerinden erişim ngForm üzerinden erişim
    this.userCreateForm.form.get('username')?.setValue('ali');
  }


  // tüm form değerlerini değiştirmemizi sağlıyor
  patchValue(){
    //ngModel üzerinden erişim
    this.username.control.setValue('ali');
    // form üzerinden erişim ngForm üzerinden erişim
    this.userCreateForm.form.patchValue({email:'cenk@test.com', username:'cenk'})
  }

}
