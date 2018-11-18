import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }
  getDashboardGridData(){
    return this.httpClient.get('../../../../../assets/data.json');
  }
}
