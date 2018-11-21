import { Freelancer } from './../model/freelancer.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  basicForm: FormGroup;

  newFreelancer: Freelancer;

  branches = [
    'Bank- und Finanzwesen',
    'Versicherungen',
    'IT',
    'Werbung und PR',
    'Beratung',
    'Telekommunikation',
    'Automobil',
    'Chemie und Pharma',
    'Software',
    'E-Commerce',
    'Energie und Umwelt',
    'Handwerk',
    'Dienstleistung',
    'Freizeit',
    'Kultur',
    'Handel',
    'Gastronomie',
    'Verkehr',

  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildBasicForm();
  }



  buildBasicForm() {
    this.basicForm = this.formBuilder.group({
      name: ['', Validators.required],
      founding_status: ['', Validators.required],
      branche: ['', Validators.required],
      occupation: ''
    });
  }
}
