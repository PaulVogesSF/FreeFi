import { Component, OnInit } from '@angular/core';

export interface Chat {
  user: string;
  sendDate: Date;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage implements OnInit {

  data = { type: '', nickname: '', message: '' };
  chats: Chat[];
  chat = {};

  constructor() {
    this.chats = [];
    this.chats.push({
      user: 'blåmo',
      sendDate: new Date(),
      message: 'Hallo',
    });
  }

  ngOnInit() {

  }

  ngDoCheck() {

  }

}
