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
    freelancerType: 'Partnergesellschaft',
    street: 'Musterstraße',
    streetNo: 42,
    plz: '12345',
    city: 'Musterstadt',
    steuerNo: '2613081508153',
    ustID: 'DE123456789',
    founding_date: '2018-12-24',
    taxAdvisor: 'Peter Steuermeister'
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
    this.branches.sort();
    this.buildBasicForm();
  }

  submit() {
    const newID = this.fireStore.createId();
    this.newFreelancer.name = this.basicForm.value['name'];
    this.newFreelancer.founding_status = this.basicForm.value['founding_status'];
    this.newFreelancer.branche = this.basicForm.value['branche'];
    this.newFreelancer.occupation = this.basicForm.value['occupation'];
    console.log('Created freelancer: ', this.newFreelancer);
    this.fireStore
    .collection<Freelancer>('users')
    .doc(newID)
    .set(this.newFreelancer);

    this.router.navigate(['/fullform']);
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
