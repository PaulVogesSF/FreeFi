import { LandingPage } from './landing/landing.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'videochat', loadChildren: './videochat/videochat.module#VideochatPageModule' },
  { path: 'checkresults', loadChildren: './checkresults/checkresults.module#CheckresultsPageModule' },
  { path: 'taxdeclaration', loadChildren: './taxdeclaration/taxdeclaration.module#TaxDeclarationModule' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsuranceModule' },  { path: 'fullform', loadChildren: './fullform/fullform.module#FullformPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
