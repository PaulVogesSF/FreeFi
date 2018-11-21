<<<<<<< HEAD
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
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingResolverService } from './services/routingresolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    resolve: [RoutingResolverService],
  },
  // { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'videochat', loadChildren: './videochat/videochat.module#VideochatPageModule' },
  { path: 'checkresults', loadChildren: './checkresults/checkresults.module#CheckresultsPageModule' },
  { path: 'taxdeclaration', loadChildren: './taxdeclaration/taxdeclaration.module#TaxDeclarationModule' },
  { path: 'taxdeclaration1', loadChildren: './taxdeclaration1/taxdeclaration1.module#TaxDeclaration1Module' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsuranceModule' },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
>>>>>>> cd122c7a3860414a4a7ceadd00cb66bbd8d7dba1
