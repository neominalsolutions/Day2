import { Component, OnInit } from '@angular/core';

export enum Gender {
  Erkek=0,
  Kadın=1
}


@Component({
  templateUrl: './pipes-sample-page.component.html',
  styleUrls: ['./pipes-sample-page.component.scss']
})
export class PipesSamplePageComponent implements OnInit {

 // pipe: template üzerindeki propertyi transform edecek bir yapı ile çalışmamızı sağlar.
  user:any = {
    birthDate:new Date(10,10,1990), // dd-mm-yyyy
    firstname:'Ali',
    surname:'Tan', // TAN
    salary:3000, // 15,000 $
    position:'Mid-Level', // MID-LEVEL
    gender:Gender.Kadın // 0:Erkek 1 Kadın
  }

  constructor() { }

  ngOnInit(): void {
  }

}
