import { Component, OnInit } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  showTaxDeclLink: boolean = true;

  constructor(private stateService: StateService) {

  }

  ngOnInit() {

  }

  ngDoCheck() {
    if (this.showTaxDeclLink && this.stateService.has('taxdeclfinished')) {
      this.showTaxDeclLink = !this.stateService.get('taxdeclfinished');
    }
  }

  public showChat(): void {

  }
}
