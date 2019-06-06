import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { campaigns } from '../campaigns';
declare var $: any;
declare var datepicker: any;
@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent {
  campaigns = campaigns;
  date: string;
  campaign:string;
  pricing: number;
  diffDays:any;
  ngOnInit(){
    debugger;
    var self = this;
    $(".datepicker").datepicker({
      onClose: function (date) {
        debugger;
          self.calcDiff(date);
      }
  });
      
  }
  calcDiff(date){
    const date1 = date;
    const date2 = new Date();
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    this.diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
  }

  showData(i) {
    debugger;
    this.date= campaigns[i].date;
    this.pricing = campaigns[i].view_pricing;
    this.campaign = campaigns[i].campaign;
  }
}
