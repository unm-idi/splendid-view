import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "Splendid View"', () => {
    expect(page.getTitleText()).toContain('SPLENDID VIEW');
  });
});
