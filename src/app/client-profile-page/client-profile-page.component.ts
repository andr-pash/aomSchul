import { Component, OnInit } from '@angular/core';

declare const Apiomat

@Component({
  selector: 'app-client-profile-page',
  templateUrl: './client-profile-page.component.html',
  styleUrls: ['./client-profile-page.component.css']
})
export class ClientProfilePageComponent implements OnInit {
  public client = new Apiomat.Client()

  constructor() { }

  ngOnInit() {
    const client = new Apiomat.Client("Kristof", "secret")

    Apiomat.Datastore.configureWithCredentials(client)

    client.loadMe({
      onOk: () => {
        client.loadInsuredBy({
          onOk: () => this.client = client,
          onError: (err) => console.error(err)
        })
      },
      onError: (err) => console.error(err)
    })


  }

}
