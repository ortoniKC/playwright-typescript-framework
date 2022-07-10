import { test as baseTest } from "@playwright/test";
import FramePage from "../pages/frame.page";
import LoginPage from "../pages/login.page";
import WindowPage from "../pages/window.page";
import WSPage from "../pages/ws.page";
import Wrapper from "../base/Wrapper";

const test = baseTest.extend<{
    framePage: FramePage;
    loginPage: LoginPage;
    wsPage: WSPage;
    winPage: WindowPage;
    base: Wrapper
}>({
    base: async ({ page }, use) => {
        await use(new Wrapper(page));
    },
    wsPage: async ({ page }, use) => {
        await use(new WSPage(page));
    },
    winPage: async ({ page }, use) => {
        await use(new WindowPage(page));
    },
    framePage: async ({ page }, use) => {
        await use(new FramePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
})

export default test;
export const expect = test.expect;