import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from './../../providers/api/api';
import { FilterPipe } from './../../app/filter.pipe'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage  implements OnInit{

  public alltopics : Alltopics [];

  filterValues = ["TR01","TR02","TR03","TR04"];

  public roomNumber : string = "showAll";

 
  constructor(public navCtrl: NavController,public apiProvider: ApiProvider) {
  }
  
  ngOnInit(){
    this.apiProvider.getAllTopics().subscribe(data => {
      this.alltopics = data.json() as Alltopics[];
      console.log(this.alltopics);
    });
    
  }

  }

  interface Alltopics {
    id: number;
    name: string;
    description: string;
    roomNumber: string;
    timeSlot: string;
 }
