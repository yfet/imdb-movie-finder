import { MovieFinderPage } from './app.po';

describe('movie-finder App', function() {
  let page: MovieFinderPage;

  beforeEach(() => {
    page = new MovieFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
