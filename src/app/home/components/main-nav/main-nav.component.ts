import { Component, OnInit } from '@angular/core';
// declare function openSlideMenu(): void;
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  constructor() {
    openSlideMenu();
  }

  ngOnInit(): void {}
}

function openSlideMenu() {
  const lo = document.getElementById('side-menu');
}
