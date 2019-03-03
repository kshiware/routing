import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  vldMsg = 'Validation Errors'
  usrObj = {
    myNm : '',
    phNm : '',
    pass : ''
  }
  constructor() { }

  ngOnInit() {
  }

  mySub(frm : NgForm) {
    console.log(frm.value)
    console.log(frm)
    if(!frm.valid) {
      this.vldMsg = 'Form is invalid'
    }else {
      this.vldMsg = 'Validation Success'
    }
  }
}