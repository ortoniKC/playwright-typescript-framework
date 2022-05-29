import test from "../src/base/utils/fixtures";

test("test", async ({ page, loginPage, framePage, wsPage, winPage, base }) => {

    // handling windows locator
    await page.goto("https://letcode.in/windows");
    await winPage.clickOpenHomePage();
    base.switchToWindow(1);
    console.log('After switching: ' + page.url());
    await wsPage.clickEditLink();
    console.log('Expected test: ' + page.url());
    // handling page locators

    // await page.goto("https://letcode.in/signin");
    // await loginPage.enterUserName("koushik1@letcode.in")
    // await loginPage.enterPassword("Pass123$")

    // handling frame locators

    // await page.goto("https://letcode.in/frame")
    // await framePage.enterFirstName("kousik");
    // await framePage.enterLastFrame("chatterjee");
})