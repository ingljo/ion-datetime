import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  maxDate: string;

  ngOnInit(): void {
    this.maxDate = new Date().toISOString();
  }

}
