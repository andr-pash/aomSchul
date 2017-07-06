import { Component, OnInit } from '@angular/core';

declare const Apiomat

@Component({
  selector: 'app-offer-list-page',
  templateUrl: './offer-list-page.component.html',
  styleUrls: ['./offer-list-page.component.css']
})
export class OfferListPageComponent implements OnInit {

  public listOfInsurances = [];

  constructor() { }

  ngOnInit() {
    console.log('entered on init')

    Apiomat.Insurance.getInsurances("", {
      onOk: (data) => {
        console.log('received data')
        this.listOfInsurances = data
        console.log(data)

      },
      onError: (err) => console.error(err)
    })

  }

}
