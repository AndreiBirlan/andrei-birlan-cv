import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropdown = {"menu": false};

  constructor() { }

  toggle(menu) {
    this.dropdown[menu] = !this.dropdown[menu]
  }

  ngOnInit(): void {
  }

}
