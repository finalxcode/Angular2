import { MyProject3Page } from './app.po';

describe('my-project3 App', function() {
  let page: MyProject3Page;

  beforeEach(() => {
    page = new MyProject3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
