import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute , Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
      <h2> You are selected department details with id {{departmentId}}</h2>
      <a (click)="goPrevious()">Previous</a>
      <a (click)="goNext()">Next</a>
      <a (click)="gotoDepatments()">Back</a>
      `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute , private router:Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    this.route.paramMap.subscribe((params: paramMap) =>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious()
  {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments-list',previousId]);

    //this.router.navigate([this.departmentId],{relativeTo:this.route});
  }

  goNext()
  {
      let nextId = this.departmentId + 1;
      this.router.navigate(['/departments-list',nextId])
     //this.router.navigate(['./'],{relativeTo:this.route});
  }
  gotoDepatments()
  {
    let selectedId = this.departmentId ? this.departmentId:null;
    this.router.navigate(['../',{id:selectedId}],{relativeTo :this.route})
  }
}
