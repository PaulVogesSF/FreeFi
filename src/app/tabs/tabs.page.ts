import { StateService } from './../services/state.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements DoCheck {
  showBadgeBool = false;
  constructor(private stateSService: StateService) {}

  ngDoCheck() {
    if (this.stateSService.has('showBadgeBool')) {
      this.showBadgeBool = this.stateSService.get('showBadgeBool');
    }
  }

}
