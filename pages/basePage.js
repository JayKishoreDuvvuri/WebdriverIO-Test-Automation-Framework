import timeout from "../config";
import { hoverFirstPage } from "../pageobjects/pages";

export default class basePage {
  constructor(path) {
    this.path = path;
  }

  async open() {
    if (!this.path) {
      await browser.url("/");
    } else {
      await browser.url(this.path);
      await browser.maximizeWindow();
    }
  }

  async visit(url) {
    await browser.url(url);
  }

  async waitForPageToLoad(selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
    const isDisplayed = await element.isDisplayed();
    if (!isDisplayed) {
      return await $(selector).waitForDisplayed();
    }
  }

  async elementIsVisible(selector) {
    const element = await $(selector);
    await element.waitForExist();
    await element.waitForDisplayed();
    const isDisplayed = await element.isDisplayed();
    return await browser.waitUntil(async function () {
      return isDisplayed;
    }, timeout);
  }

  async elementIsEnabled(selector) {
    const element = await $(selector);
    await element.waitForExist();
    await element.waitForEnabled();
    const isEnabled = await element.isEnabled();
    return await browser.waitUntil(async function () {
      return isEnabled;
    }, timeout);
  }

  async elementIsPresent(selector) {
    const element = await $(selector);
    await element.waitForExist();
    await element.waitForDisplayed();
    const isPresent = await element.isExisting();
    return await browser.waitUntil(async function () {
      return isPresent;
    }, timeout);
  }

  async getElementText(selector) {
    const element = await $(selector);
    await element.waitForExist();
    await element.waitForDisplayed();
    return element.getText();
  }

  async click(selector) {
    const element = await $(selector);
    await element.waitForExist();
    await element.waitForDisplayed();
    return element.click();
  }

  async jsClick(selector) {
    const element = await $(selector);
    await element.waitForExist();
    await element.waitForDisplayed();
    return await browser.execute("arguments[0].click();", element);
  }

  async sendKeys(selector, keys) {
    const element = await $(selector);
    await element.waitForExist();
    await element.setValue(keys);
  }

  async mouseHover(selector) {
    const element = await $(selector);
    await element.waitForExist();
    await element.waitForDisplayed();
    return element.moveTo();
  }

  async newPageElementIsVisble(selector) {
    const element = await $(selector);
    await this.mouseHover(hoverFirstPage);
    await this.click(hoverFirstPage);
    await element.waitForDisplayed();
    const isDisplayed = await element.isDisplayed();
    return await browser.waitUntil(async function () {
      return isDisplayed;
    }, timeout);
  }
}
