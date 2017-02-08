import { MoshPostsPage } from './app.po';

describe('mosh-posts App', function() {
  let page: MoshPostsPage;

  beforeEach(() => {
    page = new MoshPostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
