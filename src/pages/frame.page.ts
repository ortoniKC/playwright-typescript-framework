import { Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class FramePage extends Wrapper {

    constructor(protected page: Page) {
        super(page);
    }


    public async enterFirstName(username: string) {
        const fName = await this.findLocator("input[name='fname']",
            { frame: "#firstFr" });
        await fName.type(username);
    }

    public async enterLastFrame(password: string) {
        const fName = await this.findLocator("input[name='lname']",
            { frame: "#firstFr", state: "visible" });
        await fName.type(password);
    }
}