import { Component, OnInit, DoCheck } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, DoCheck {

  showTaxDeclLink  = true;
  showInsuranceLink = true;
  showCards = 0;

  constructor(private stateService: StateService) {

  }

  ngOnInit() {
    const max = 6;
    const interval = setInterval(() => {
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
