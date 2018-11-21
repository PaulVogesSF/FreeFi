import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class RoutingResolverService implements Resolve<any> {

  constructor(private router: Router, private stateService: StateService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    console.log('resolver %s', this.stateService.get('onboardingfinished'));
    const showIntro: boolean = !(this.stateService.get('onboardingfinished') || false);
    if (showIntro) {
      this.router.navigateByUrl('/landing');
    }
  }
}
