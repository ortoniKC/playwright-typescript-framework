import test from "../src/utils/fixtures";
import ENV from "../src/utils/env"
test("test", async ({ page, loginPage, framePage, wsPage, winPage, base }) => {

    // handling windows locator

    // console.log(ENV.BASE_URL);
    // console.log(ENV.USERNAME);
    // console.log(ENV.PASSWORD);

    await page.goto(ENV.BASE_URL);
    await winPage.clickOpenHomePage();
    // swicth to window
    await wsPage.clickEditLink({ tabId: 1 });
    await base.closeTab({ tabId: 1 })


    // // handling page locators

    await page.goto("https://letcode.in/signin");
    await loginPage.enterUserName("koushik1@letcode.in")
    await loginPage.enterPassword("Pass123$")

    // // handling frame locators

    await page.goto("https://letcode.in/frame")
    await framePage.enterFirstName("kousik");
    await framePage.enterLastFrame("chatterjee");
})