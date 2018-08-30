import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  products = [];
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getEmployees() {
    this.http.get('assets/products.json').subscribe(data => {
      console.log(data);
    })
  }

}
