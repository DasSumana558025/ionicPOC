import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  model : any = {};
  employess : any = [];
  constructor(public navCtrl: NavController,public apiProvider: ApiProvider) {
    this.employess = this.apiProvider.getEmployees();
  }

  onSubmit()
  {
    console.log(this.employess);
    console.log(this.model);
  }

}
