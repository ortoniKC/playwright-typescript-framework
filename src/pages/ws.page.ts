import { Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class WSPage extends Wrapper {
    constructor(public page: Page) {
        super(page);
    }

    public async clickEditLink(options?: {
        tabId?: number
    }) {
        await (await this.findLocator("//a[.='Edit']", {
            tabId: options?.tabId
        })).click({ timeout: 10000 });
    }
}