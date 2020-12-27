const util = require('../../utils/util');

describe('The url should open successfully in any browser(Chrome/Edge, PC/Tablet/Mobile)', () => {
    it('should open the url in PC resolution', () => {
        browser.setWindowSize(1080, 720);
        util.open();
        expect(browser).toHaveTitle('Portfolio | Santhosh');
    });

    it('should open the url in tablet resolution', () => {
        browser.setWindowSize(1024, 768);
        util.open();
        expect(browser).toHaveTitle('Portfolio | Santhosh');
    });

    it('should open the url in phone resolution', () => {
        browser.setWindowSize(375, 812);
        util.open();
        browser.debug()
        expect(browser).toHaveTitle('Portfolio | Santhosh');
    });
});

describe('The left navigation should change based on the resolution(Chrome/Edge, PC/Tablet/Mobile)', () => {
    it('should check if left navigation menu is present in PC resolution on load', () => {
        browser.setWindowSize(1080, 720);
        util.open();
        const attribute = $('//*[@id="nav-menu"]').getAttribute('class')
        expect(attribute).toEqual('nav__menu');
    });

    it('should open left navigation menu upon clicking the hamburger symbol at the top left corner in tablet resolution', () => {
        browser.setWindowSize(1024, 768);
        util.open();
        $('//*[@id="nav-toggle"]').click();
        const attribute = $('//*[@id="nav-menu"]').getAttribute('class')
        expect(attribute).toEqual('nav__menu show');
    });

    it('should open left navigation menu upon clicking the hamburger symbol at the top left corner in phone resolution', () => {
        browser.setWindowSize(375, 812);
        util.open();
        $('//*[@id="nav-toggle"]').click();
        const attribute = $('//*[@id="nav-menu"]').getAttribute('class')
        expect(attribute).toEqual('nav__menu show');
    });
});

describe('Take screenshots after each click and save in the folder specified for a happy work flow', () => {
    it('should take screenshots after each click', () => {
        browser.setWindowSize(1080, 720);
        util.open();
        browser.saveScreenshot('./screenshots/onload.png');
        // click on about
        $('//*[@id="nav-menu"]/ul/li[2]/a').click();
        browser.saveScreenshot('./screenshots/about.png');
        // click on skills
        $('//*[@id="nav-menu"]/ul/li[3]/a').click();
        browser.saveScreenshot('./screenshots/skills.png');
        // click on experience
        $('//*[@id="nav-menu"]/ul/li[4]/a').click();
        browser.saveScreenshot('./screenshots/experience.png');
        // click on works
        $('//*[@id="nav-menu"]/ul/li[5]/a').click();
        browser.saveScreenshot('./screenshots/works.png');
        // click on contact me
        $('//*[@id="nav-menu"]/ul/li[6]/a').click();
        browser.saveScreenshot('./screenshots/contact.png');
        // click on home
        $('//*[@id="nav-menu"]/ul/li[1]/a').click();
        browser.saveScreenshot('./screenshots/home.png');
    })
})