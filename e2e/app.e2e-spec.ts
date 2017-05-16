import { CorphackPage } from './app.po';

describe('corphack App', () => {
  let page: CorphackPage;

  beforeEach(() => {
    page = new CorphackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
