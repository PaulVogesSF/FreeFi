import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Freelancer } from '../model/freelancer.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  basicForm: FormGroup;

  newFreelancer: Freelancer = {
    name: '',
    branche: '',
    occupation: '',
    founding_status: '',
  };

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

  constructor(private formBuilder: FormBuilder,
    private fireStore: AngularFirestore,
    private router: Router) {}

  ngOnInit() {
    this.buildBasicForm();
  }

  submit() {
    const newID = this.fireStore.createId();
    this.newFreelancer = this.basicForm.value;
    console.log('Created freelancer: ', this.newFreelancer);
    /* this.fireStore
    .collection<Freelancer>('users')
    .doc(newID)
    .set(this.newFreelancer); */ // TODO: Re-Enable

    this.router.navigate(['/videochat']);
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
