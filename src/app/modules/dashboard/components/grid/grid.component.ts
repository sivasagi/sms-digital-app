import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.service';
import {MatSort, MatTableDataSource, PageEvent, MatPaginator} from '@angular/material';

export interface tableData {
  id: number;
  city: string;
  color: string;
  end_date: any;
  price: string;
  start_date: any;
  status: string;
}


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  GRID_DATA: tableData[] = [];
  filteredGridData = [];
  end_date: string;
  displayedColumns: string[] = ['id','city','start_date','end_date', 'color', 'price','status'];
  dataSource = new MatTableDataSource();

  // MatPaginator Inputs
  length: number;
  pageSize = 100;
  pageSizeOptions: number[] = [50, 100, 500];

  // MatPaginator Output
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  startDateValue: any;
  endDateValue: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getDashboardGridData().subscribe(
      (data: any) => {
        if(data){
          this.GRID_DATA = data;
          this.dataSource = new MatTableDataSource(this.GRID_DATA);
          this.assignGridData();
        }
      }
    );
  }

  filterGridData(){
    if(!this.startDateValue || !this.endDateValue){
      return;
    }
    this.filteredGridData = [];        
    for (var i=0; i<this.GRID_DATA.length; i++){
        const tf = new Date(this.GRID_DATA[i].start_date);
        const tt = new Date(this.GRID_DATA[i].end_date);
        if ( (tf >= this.startDateValue && tf <= this.endDateValue ) && (tt <= this.endDateValue && tt >= this.startDateValue ) )  {
          this.filteredGridData.push(this.GRID_DATA[i]);
        }
    }
    this.dataSource = new MatTableDataSource(this.filteredGridData);
    this.assignGridData();
  }

  resetGridData(){
    this.filteredGridData = [];
    this.startDateValue = '';
    this.endDateValue = '';
    this.dataSource = new MatTableDataSource(this.GRID_DATA);
    this.assignGridData();
  }

  assignGridData(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.length = this.GRID_DATA.length;
    return;
  }

}
