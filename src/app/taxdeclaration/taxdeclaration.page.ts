import { Component, OnInit } from '@angular/core';

import { StateService } from '../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taxdeclaration',
  templateUrl: 'taxdeclaration.page.html',
  styleUrls: ['taxdeclaration.page.scss']
})
export class TaxDeclarationPage implements OnInit {

  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit() {

  }

  public doItForMe() {
    this.stateService.set('taxdeclfinished', true);
    this.router.navigateByUrl('/');
  }
}
