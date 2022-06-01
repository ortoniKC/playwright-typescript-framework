import { Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class FramePage extends Wrapper {

    constructor(public page: Page) {
        super(page);
    }


    public async enterFirstName(username: string) {
        const fName = await this.findLocator("input[name='fname']",
            { frame: "#firstFr" });
        await fName.type(username);
    }

    public async enterLastFrame(password: string) {
        const fName = await this.findLocator("input[name='lname']",
            { frame: "#firstFr" });
        await fName.type(password);
    }
}