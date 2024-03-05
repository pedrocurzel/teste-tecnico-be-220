import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/home/home.page';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent  implements OnInit {
  @Input() currentUser: User | null = null;;

  colorLevels: any = {
    "roxo": "purple-text",
    "vermelho": "red-text",
    "verde": "green-text"
  }

  constructor() { }

  ngOnInit() {
  }

  capitalizeLevel(level: string) {
    return level.charAt(0).toUpperCase() + level.slice(1);
  }

}
