import { Locator, Page } from "@playwright/test";
export default class Wrapper {

    constructor(public page: Page) {
    }

    public async findLocator(value: string, options?: {
        frame?: string,
        tabId?: number,
        timeOut?: number,
        has?: Locator,
        hasText?: string
    }): Promise<Locator> {
        // improve this window concept
        if (options?.tabId) {
            this.page = this.page.context().pages()[options.tabId]
        }
        if (options?.frame) {
            return this.page.frameLocator(options.frame).locator(value, {
                has: options?.has,
                hasText: options?.hasText
            });
        }
        return this.page.locator(value, {
            has: options?.has,
            hasText: options?.hasText
        })

    }

    public getUrl(): string {
        return this.page.url();
    }

    public async closeTab(options?: {
        tabId?: number
    }) {
        if (options?.tabId) {
            await this.page.context().pages()[options.tabId].close();
        }
        else {
            await this.page.close()
        }

    }



}