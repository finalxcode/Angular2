import { Component , OnInit} from '@angular/core';
import {Http} from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
//加载配置文件
//import details = require ('./name');
//import details from './name';
//

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class AppComponent {
	result: any;
	
	title = 'app works!';
	constructor(http: Http) {
		http.get('app/friends.json').subscribe(
		     (data) => {
		       this.result = data.json();
		     },
		     err=>console.log(err)
		);
	}
    /*ngOnInit() {
       this.getFriends();
    }
    getFriends() {
  	    
    }*/
}
