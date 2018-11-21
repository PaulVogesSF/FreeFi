import { Component, OnInit } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  showTaxDeclLink: boolean = true;
  showInsuranceLink: boolean = true;
  showCards: number = 0;
  analyseData: string;

  constructor(private stateService: StateService) {

  }

  ngOnInit() {
    const analysisData: string[] = ['Analysiere Status', 'Analysiere Konten', 'Analysiere Verträge', 'Analysiere Tätigkeitsprofil', 'Bin fix und FERTIG'];
    const max = 5;
    const interval = setInterval(() => {
      this.analyseData = analysisData[this.showCards];
      this.showCards += 1;
      if(this.showCards > max) {
        clearInterval(interval);
      }
      }, 2000
    );
  }

  ngDoCheck() {
    if (this.showTaxDeclLink && this.stateService.has('taxdeclfinished')) {
      setTimeout(() => {this.showTaxDeclLink = !this.stateService.get('taxdeclfinished');}, 1000);
    }

    if (this.showInsuranceLink && this.stateService.has('insurancefinished')) {
      setTimeout(() => {this.showInsuranceLink = !this.stateService.get('insurancefinished');}, 1000);
    }
  }

  public showChat(): void {

  }
}
