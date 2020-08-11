import { Component, OnInit } from '@angular/core';
import { CovidService } from '../service/covid.service';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
  providers:[CovidService]
})
export class Demo1Component implements OnInit {
  loopcount= ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
 data: any;
 districtsMap = new Map();
  combinedData: any = [];
  lastUpdatedTime: any;
  constructor(public covidService: CovidService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getAllStateData();
  }
  getAllStateData(){
    this.covidService.getStateData().subscribe(data =>{
      this.data = data; //state data fetched
      this.lastUpdatedTime  = this.data.tested[0].updatetimestamp;
      // this.lastUpdatedTime =  this.datePipe.transform(lastUpdated, "yyyy-MM-dd");
      this.covidService.getDistrictData().subscribe(data =>{
        //district data fetched
        for(var i = 0; i < data.length; i++){
          this.districtsMap.set(data[i].state, data[i].districtData);
        }
         for(var j = 1; j < this.data.statewise.length; j++){
          let combData ={
            stateData: this.data.statewise[j],
            districtData: this.districtsMap.get(this.data.statewise[j].state)
          };
          this.combinedData.push(combData);
        }
        }) 
    })
  }

  dispDistrictsAff(len, index){
    if(document.getElementById("districts_"+ index + "0").hidden==true){
      for(var i = 0; i < len; i++){
        document.getElementById("districts_"+ index + i).hidden=false;
      }
    }else{
      for(var i = 0; i < len; i++){
        document.getElementById("districts_"+ index + i).hidden=true;
      }
    }
  }
 
   changeColour(i){
    document.getElementById("stateName_"+ i).style.backgroundColor='#cad1d9';
    document.getElementById("confirm_"+ i).style.backgroundColor='#cad1d9';
    document.getElementById("active_"+ i).style.backgroundColor='#cad1d9';
    document.getElementById("recovered_"+ i).style.backgroundColor='#cad1d9';
    document.getElementById("death_"+ i).style.backgroundColor='#cad1d9';
   }

   removeColour(i){
    document.getElementById("stateName_"+ i).style.backgroundColor='#f6f6f7';
    document.getElementById("confirm_"+ i).style.backgroundColor='#f6f6f7';
    document.getElementById("active_"+ i).style.backgroundColor='#f6f6f7';
    document.getElementById("recovered_"+ i).style.backgroundColor='#f6f6f7';
    document.getElementById("death_"+ i).style.backgroundColor='#f6f6f7';
   }
   changeColour1(){
    document.getElementById("total").style.backgroundColor='#cad1d9';
    document.getElementById("total_confirmed").style.backgroundColor='#cad1d9';
    document.getElementById("total_active").style.backgroundColor='#cad1d9';
    document.getElementById("total_recovered").style.backgroundColor='#cad1d9';
    document.getElementById("total_deceased").style.backgroundColor='#cad1d9';
   }
   removeColour2(){
    document.getElementById("total").style.backgroundColor='#f6f6f7';
    document.getElementById("total_confirmed").style.backgroundColor='#f6f6f7';
    document.getElementById("total_active").style.backgroundColor='#f6f6f7';
    document.getElementById("total_recovered").style.backgroundColor='#f6f6f7';
    document.getElementById("total_deceased").style.backgroundColor='#f6f6f7';
   }
}
