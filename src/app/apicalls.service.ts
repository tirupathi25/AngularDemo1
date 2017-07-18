import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable()
export class APICallsService {

  constructor(private http:Http) { 

console.log('itnitialized');

  }

httpGetMethod(){

// console.log(this.http.get('http://jsonplaceholder.typicode.com/photos').map(res => res
//   .json()));
  return this.http.get('https://itunes.apple.com/us/rss/topfreeapplications/limit=10/json').map(res => res
  .json());

  
}

}
