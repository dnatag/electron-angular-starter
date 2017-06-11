import { ElectronNg2StarterPage } from './app.po';

describe('electron-ng2-starter App', () => {
  let page: ElectronNg2StarterPage;

  beforeEach(() => {
    page = new ElectronNg2StarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
