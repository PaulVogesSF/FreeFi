import { Component, OnInit } from '@angular/core';

import { StateService } from '../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: 'insurance.page.html',
  styleUrls: ['insurance.page.scss']
})
export class InsurancePage implements OnInit {

  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit() {

  }

  public doItForMe() {
    this.stateService.set('insurancefinished', true);
    this.stateService.set('badgeValue', '2');
    this.router.navigate(['/chat']);
  }

  public doBack() {
    this.stateService.set('insurancefinished', true);
    this.stateService.set('badgeValue', '2');
    this.router.navigate(['/']);
  }
}
