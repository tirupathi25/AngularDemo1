import { Component, OnInit } from '@angular/core';
import { APICallsService } from '../apicalls.service'
@Component({
  moduleId:module.id,
  selector: 'app-futured-apps',
  templateUrl: './futured-apps.component.html',
  styleUrls: ['./futured-apps.component.css'],
  providers:[APICallsService]
})
export class FuturedAppsComponent implements OnInit {

apps:FutureAppsModel[];
  constructor(private dataService:APICallsService) { 

this.dataService.httpGetMethod().subscribe(futureapps => {
this.apps = futureapps.feed.entry;

console.log(this.apps);

});

  }

  ngOnInit() {
  }

}

interface FutureAppsModel{
  
  app_tittle : string,
  app_image : string,
  app_description : string
}
