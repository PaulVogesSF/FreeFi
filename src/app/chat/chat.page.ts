import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  data = { message: '' };
  chats: Chat[];

  constructor(private router: Router) {
    this.chats = [];
    this.chats.push({
      user: 'blåmo',
      sendDate: new Date(),
      message: 'Hallo',
    });
  }

  ngOnInit() {

  }

  sendMessage() {
    this.chats.push({
      user: 'nickname',
      sendDate: new Date(),
      message: this.data.message,
    });
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

}
