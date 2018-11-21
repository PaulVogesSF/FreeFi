import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxDeclaration1Page } from './taxdeclaration1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TaxDeclaration1Page }])
  ],
  declarations: [TaxDeclaration1Page]
})
export class TaxDeclaration1Module {}
