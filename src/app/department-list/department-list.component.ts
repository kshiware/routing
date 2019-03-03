import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute , ParamMap}  from '@angular/router';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Departments</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor ="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments =[
    {"id": 1 ,"name": "MangoDB"},
    {"id": 2 ,"name": "ExpressJs"},
    {"id": 3 ,"name": "Angular"},
    {"id": 4 ,"name": "Nodejs"}
  ]
  constructor(private router:Router , private route: ActivatedRoute) { }
  public selectedId;
  ngOnInit() {
    // this.route.paramMap.subscribe((params: paramMap) =>{
    //   let id = parseInt(params.get('id'));
    //   this.selectedId = id;
    // });
  }
  onSelect(department)
  {
    //this.router.navigate(['/departments',department.id]);
    this.router.navigate([department.id], { relativeTo : this.route})
  }

  // isSelected(department)
  // {
  //   department.id = this.selectedId
  // }
}
