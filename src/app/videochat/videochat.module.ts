import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideochatPage } from './videochat.page';
import { AgoraConfig, AngularAgoraRtcModule } from 'angular-agora-rtc';
import { environment } from 'src/environments/environment.prod';

const agoraConfig: AgoraConfig = {
  AppID: environment.agora.appID,
};

const routes: Routes = [
  {
    path: '',
    component: VideochatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AngularAgoraRtcModule.forRoot(agoraConfig)

  ],
  declarations: [VideochatPage]
})
export class VideochatPageModule {}
