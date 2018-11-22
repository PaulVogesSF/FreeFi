import { Component, OnInit, DoCheck } from '@angular/core';

import { StateService } from '../services/state.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Freelancer } from '../model/freelancer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, DoCheck {
  dataLoader: Observable<Freelancer>;

  showTaxDeclLink = true;
  showInsuranceLink = true;
  showCards = 0;
  analyseData: string;

  username = '';


  constructor(private stateService: StateService,
    private fireStore: AngularFirestore) {

  }

  ngOnInit() {
    this.dataLoader = this.fireStore.doc<Freelancer>('/users/' + this.stateService.get('userID')).valueChanges();
    if (this.dataLoader) {
      this.dataLoader.subscribe(freelancer => {
      this.username = freelancer.name;
      this.stateService.set('username', freelancer.name);
    });
  }

    const analysisData: string[] =
      ['Analysiere Status',
      'Analysiere Konten',
       'Analysiere Verträge',
        'Analysiere Tätigkeitsprofil',
         'Bin fix und FERTIG'];
    const max = 5;
    const interval = setInterval(() => {
      this.analyseData = analysisData[this.showCards];
      this.showCards += 1;
      if (this.showCards > max) {
        clearInterval(interval);
      }
      }, 2000
    );
  }

  ngDoCheck() {
    if (this.showTaxDeclLink && this.stateService.has('taxdeclfinished')) {
      setTimeout(() => {this.showTaxDeclLink = !this.stateService.get('taxdeclfinished'); } , 1000);
    }

    if (this.showInsuranceLink && this.stateService.has('insurancefinished')) {
      setTimeout(() => {this.showInsuranceLink = !this.stateService.get('insurancefinished'); } , 1000);
    }
  }

  public showBadge() {
    this.stateService.set('showBadgeBool', true);
    console.log('Badges display set to true');
  }

  public showChat(): void {

  }
}
