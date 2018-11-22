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

  username: string;

  userID: string;

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
    this.username = this.stateService.get('username');
    this.userID = this.stateService.get('userID'); // TODO RE-Implement

    console.log('Loaded user: ', this.userID, this.username);
    this.branches.sort();
    this.buildForm();

   this.dataLoader = this.fireStore.doc<Freelancer>('/users/' + this.userID).valueChanges();

    console.log('Retrieved firestore data: ', this.dataLoader);

    if (this.dataLoader) {
      this.dataLoader.subscribe(freelancer => {
      this.currentFreelancer = freelancer;
      this.resultsform.patchValue(this.currentFreelancer);
    });
    }
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
      .doc(this.userID)
      .set(this.currentFreelancer);

    this.stateService.set('onboardingfinished', true);
    this.stateService.set('badgeValue', '0');

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
      uid: [this.userID]
    });
  }

}
