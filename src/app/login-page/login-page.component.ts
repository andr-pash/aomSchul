import { Component, OnInit } from '@angular/core';

declare const Apiomat;

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

  loginAsClient() {
    const client = new Apiomat.Client();

    client.setUserName(this.username);
    client.setPassword(this.password);

    Apiomat.Datastore.configureWithCredentials(client);
  }

}
