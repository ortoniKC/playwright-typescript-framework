import { Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class WSPage extends Wrapper {
    constructor(protected page: Page) {
        super(page);
    }

    public async clickEditLink() {
        console.log('Got new page? ' + this.getUrl);
        await (await this.findLocator("//a[.='Edit']")).click({ timeout: 10000 });
    }
}