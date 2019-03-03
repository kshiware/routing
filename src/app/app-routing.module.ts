import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { DataDrivenFormsComponent } from './forms/data-driven-forms/data-driven-forms.component';

const formsRoutes: Routes = [
  { path: 'td', component: TemplateDrivenFormsComponent },
  { path: 'dd', component: DataDrivenFormsComponent }
]

const routes: Routes = [
 // {path:'' , component:DepartmentListComponent},
  {path:'' , redirectTo:'/departments-list',pathMatch:'full'},
  {path:'departments-list' , component:DepartmentListComponent},
  {path:'departments-list/:id' , component:DepartmentDetailsComponent},
  {path:'employees',component:EmployeeListComponent},
  { path: 'forms', component: FormsComponent, children: formsRoutes },
  {path:'**', component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ DepartmentListComponent , 
                                   EmployeeListComponent,
                                   PageNotFoundComponent,
                                   DepartmentDetailsComponent
                                  ]