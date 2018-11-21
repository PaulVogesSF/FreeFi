import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxDeclarationPage } from './taxdeclaration.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TaxDeclarationPage }])
  ],
  declarations: [TaxDeclarationPage]
})
export class TaxDeclarationModule {}
