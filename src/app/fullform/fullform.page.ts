import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullform',
  templateUrl: './fullform.page.html',
  styleUrls: ['./fullform.page.scss'],
})
export class FullformPage implements OnInit {
  resultsform: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  submit() {
    this.router.navigate(['/videochat']);
    }


  buildForm() {
    this.resultsform = this.formBuilder.group({
      name: '',
      founding_status: '',
      branche: '',
      occupation: '',
      freelancerType: '',
      street: '',
      streetNo: 0,
      plz: '',
      city: '',
      steuerNo: '',
      ustID: '',
      founding_date: '',
      taxAdvisor: '',
    });
  }

}
