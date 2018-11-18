import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedTabNumber: number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getActiveTabNumber();
  }

  getActiveTabNumber(){
    if(this.router && this.router.url == '/dashboard/grid'){
      this.selectedTabNumber = 0;
    }else if(this.router && this.router.url == '/dashboard/form'){
      this.selectedTabNumber = 1;
    }else{
      this.selectedTabNumber = 0;
    }
  }

  switchTabs($event) {
    if($event && $event.tab['textLabel'] == 'Grid'){
      this.router.navigate(['/dashboard/grid']);
    }else if($event && $event.tab['textLabel'] == 'Form'){
      this.router.navigate(['/dashboard/form']);
    }else{
      this.router.navigate(['/dashboard/grid']);
    }
  }

}
