import basePage from "./basePage";
import { pagesTimeout, waitTime } from "../config";
import {
  pagesButton,
  pagesSearchbar,
  pageSearchResults,
  pagesSearchBarText,
  pageTagsLabel,
  editMenu,
  pageSettingslabel,
  managePagesMenu,
  managePagesTitle,
  firstPageLabel,
  pagesBurgerButton,
  addSubPageOption,
  addNavigationItem,
  newPageButton,
  newLink,
  pageNameInput,
  pagesCreateButton,
  newPageTitle,
  hoverFirstPage,
} from "../pageobjects/pages";

class pages extends basePage {
  async pagesButtonEnabled() {
    return await this.elementIsEnabled(pagesButton);
  }

  async clickPagesButton() {
    return await this.click(pagesButton);
  }

  async searchBarEnabled() {
    return await this.elementIsEnabled(pagesSearchbar);
  }

  async typeTextinSearchbar() {
    return await this.sendKeys(pagesSearchbar, pagesSearchBarText);
  }

  async pageSearchResults() {
    return await this.elementIsVisible(pageSearchResults);
  }

  async clickSearchResults() {
    await this.click(pageSearchResults);
    return await this.wait();
  }

  async wait() {
    return await browser.pause(pagesTimeout);
  }

  async pagesTagVisible() {
    return await this.elementIsVisible(pageTagsLabel);
  }

  async clickEditMenu() {
    return await this.click(editMenu);
  }

  async pageSettingsLabelIsVisible() {
    return await this.elementIsVisible(pageSettingslabel);
  }

  async clickManagePagesMenu() {
    return await this.click(managePagesMenu);
  }

  async managePagesTitleIsVisible() {
    return await this.elementIsVisible(managePagesTitle);
  }

  async firstPageLabelIsVisible() {
    return await this.elementIsVisible(firstPageLabel);
  }

  async clickPagesBurgerButton() {
    return await this.click(pagesBurgerButton);
  }

  async clickAddSUbPageOption() {
    return await this.click(addSubPageOption);
  }

  async addNavigationTitleIsVisible() {
    return await this.elementIsVisible(addNavigationItem);
  }

  async newPageButtonVisible() {
    return await this.elementIsVisible(newPageButton);
  }
  async newLinkVisible() {
    return await this.elementIsVisible(newLink);
  }

  async typePageName() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    var randomName = `name${new Date().getTime().toString()}${randomNumber}`;
    await this.sendKeys(pageNameInput, randomName);
    return randomName;
  }

  async pagesCreateButtonIsEnabled() {
    return await this.elementIsEnabled(pagesCreateButton);
  }

  async clickCreateButton() {
    await this.click(pagesCreateButton);
    await browser.pause(waitTime);
  }

  async newPageTitleIsVisible() {
    const isVisible = await this.elementIsVisible(newPageTitle);
    return isVisible;
  }
}
export default new pages();
