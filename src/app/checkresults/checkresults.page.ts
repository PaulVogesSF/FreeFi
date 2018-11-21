import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Freelancer } from './../model/freelancer.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-checkresults',
  templateUrl: './checkresults.page.html',
  styleUrls: ['./checkresults.page.scss'],
})
export class CheckresultsPage implements OnInit {
  dataLoader: Observable<Freelancer>;
  currentFreelancer: Freelancer;

  resultsform: FormGroup;

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
    private router: Router,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.branches.sort();
    this.buildForm();
    this.dataLoader = this.fireStore.doc<Freelancer>('/users/bIcyKqXhxPq4zOUuFHxh').valueChanges();
    this.dataLoader.subscribe(freelancer => {
      this.currentFreelancer = freelancer;
      this.resultsform.patchValue(this.currentFreelancer);
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Dein Dashboard wird geladen',
      duration: 2000
    });
    loading.present();
  }

  submit() {
    this.currentFreelancer = this.resultsform.value;
    this.fireStore
    .collection<Freelancer>('users')
    .doc('bIcyKqXhxPq4zOUuFHxh')
    .set(this.currentFreelancer);

    this.router.navigate(['/dashboard']);
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
