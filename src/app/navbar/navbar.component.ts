import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedCurrency:string='INR';
  constructor() { }

  ngOnInit(): void {
  }
  sendcurrency(event:string){
    console.log(event);
  }
}
