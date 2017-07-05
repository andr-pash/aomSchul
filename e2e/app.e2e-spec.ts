import { SchulungsTMPPage } from './app.po';

describe('schulungs-tmp App', () => {
  let page: SchulungsTMPPage;

  beforeEach(() => {
    page = new SchulungsTMPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
