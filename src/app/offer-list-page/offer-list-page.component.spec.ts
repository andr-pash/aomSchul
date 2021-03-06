import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferListPageComponent } from './offer-list-page.component';

describe('OfferListPageComponent', () => {
  let component: OfferListPageComponent;
  let fixture: ComponentFixture<OfferListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
