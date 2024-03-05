import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  implements OnInit {

  constructor() { }

  isLoading: boolean = true;
  notifications: Notification[] = [];
  hasUnreadNotifications: boolean = false;

  ngOnInit() {
    this.getNotifications();
  }

  async getNotifications() {
    this.isLoading = true;
    await this.sleep(2500);
    this.notifications.push({
      title: "Notification Title",
      content: "Notification Content",
      isRead: false,
      date: null
    });
    this.hasUnreadNotifications = true;
    this.isLoading = false;
  }

  async sleep(ms: number) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("");
      }, ms);
    });
  }

}


interface Notification {
  title: string,
  content: string,
  date: Date | null,
  isRead: boolean
}