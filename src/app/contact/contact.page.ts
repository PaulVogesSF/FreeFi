import { StateService } from './../services/state.service';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  constructor(private stateService: StateService) {}
}

