import { Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class WindowPage extends Wrapper {
    constructor(public page: Page) {
        super(page);
    }

    public async clickOpenHomePage() {
        await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click("#home")
        ])
    }
}