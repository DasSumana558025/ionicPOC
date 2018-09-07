import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
  
  public allFeedback : AllFeedback [];
  constructor(public navCtrl: NavController,public apiProvider: ApiProvider) {
       
  }

    ngOnInit(){
        this.apiProvider.getFeedbacks().subscribe(data => {
        this.allFeedback = data.json() as AllFeedback[];
        console.log("Inside ContactPage and onInit() = "+this.allFeedback);
      });
    }
  }

  interface AllFeedback {
    id : number;
    session : number;
    description: string;
    sessionId : number;
    sessionName :string;
    questionDescription :any;
  }


