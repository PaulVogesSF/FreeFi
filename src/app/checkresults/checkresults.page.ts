import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { Freelancer } from './../model/freelancer.model';
import { StateService } from '../services/state.service';

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
    public loadingController: LoadingController,
    private stateService: StateService) { }

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

    this.stateService.set('onboardingfinished', true);

<<<<<<< HEAD
    this.router.navigate(['/dashboard']);
    }
=======
    this.presentLoading();

    setTimeout(() => {
      console.log('Waited');
      this.router.navigate(['/']);
    }, 2500);
  }

>>>>>>> cd122c7a3860414a4a7ceadd00cb66bbd8d7dba1


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
