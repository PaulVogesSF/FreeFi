import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingResolverService } from './services/routingresolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    // resolve: [RoutingResolverService],
  },
  {
    path: 'dashboard',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    // resolve: [RoutingResolverService],
  },
  // { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'videochat', loadChildren: './videochat/videochat.module#VideochatPageModule' },
  { path: 'checkresults', loadChildren: './checkresults/checkresults.module#CheckresultsPageModule' },
  { path: 'taxdeclaration', loadChildren: './taxdeclaration/taxdeclaration.module#TaxDeclarationModule' },
  { path: 'taxdeclaration1', loadChildren: './taxdeclaration1/taxdeclaration1.module#TaxDeclaration1Module' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsuranceModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'fullform', loadChildren: './fullform/fullform.module#FullformPageModule' },
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
