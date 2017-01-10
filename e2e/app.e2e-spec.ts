import { SkillCloudPage } from './app.po';

describe('skill-cloud App', function() {
  let page: SkillCloudPage;

  beforeEach(() => {
    page = new SkillCloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
