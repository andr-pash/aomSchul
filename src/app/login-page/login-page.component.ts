import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public username;
  public password;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
