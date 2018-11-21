import { LandingPage } from './landing/landing.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'videochat', loadChildren: './videochat/videochat.module#VideochatPageModule' },
<<<<<<< HEAD
  { path: 'checkresults', loadChildren: './checkresults/checkresults.module#CheckresultsPageModule' },
=======
  { path: 'taxdeclaration', loadChildren: './taxdeclaration/taxdeclaration.module#TaxDeclarationModule' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsuranceModule' }
>>>>>>> 21aad2638a0517b52ae2cc2190902bfef1962547
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
