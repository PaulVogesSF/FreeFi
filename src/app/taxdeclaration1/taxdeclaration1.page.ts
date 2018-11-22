import { StateService } from './../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxdeclaration1',
  templateUrl: 'taxdeclaration1.page.html',
  styleUrls: ['taxdeclaration1.page.scss']
})
export class TaxDeclaration1Page implements OnInit {
  username = '';
  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.get('username');
  }
}
