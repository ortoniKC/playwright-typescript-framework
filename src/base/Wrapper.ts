import { ElementHandle, FrameLocator, Locator, Page } from "@playwright/test";
export default class Wrapper {

    constructor(protected page: Page) {
    }

    protected async findLocator(value: string, options?: {
        frame?: string | undefined;
        waitForLocator?: boolean | undefined;
        state?: "visible" | "attached";
        timeout?: number;
    }): Promise<ElementHandle<SVGElement | HTMLElement> | Locator> {
        if (options?.waitForLocator) {
            return await this.page.waitForSelector(value, {
                state: options.state,
                timeout: options.timeout
            });
        }
        if (options?.frame) {
            return this.page.frameLocator(options.frame).locator(value);
        }
        return this.page.locator(value);
    }
    public switchToWindow(tabId: number) {
        const pages = this.page.context().pages();
        console.log('No.of Windows: ' + pages.length);
        this.page = pages[tabId];
    }

    public get getUrl() {
        return this.page.url();
    }

}