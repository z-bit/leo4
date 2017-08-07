import { Cat4Page } from './app.po';

describe('cat4 App', () => {
  let page: Cat4Page;

  beforeEach(() => {
    page = new Cat4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
