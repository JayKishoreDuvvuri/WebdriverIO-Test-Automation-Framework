import basePage from "./basePage";
import {
  navBarMain,
  searchBarMain,
  bookMarks,
  launcher,
  notifications,
  profile,
  myStreamLabel,
  myStreamPublishedByAndDate,
  myNewsLabel,
  myNewsPublishedByAndDate,
  channelsLabel,
  channelsSearchBar,
  searchBarText,
  channelsButton,
  interviewChannelText,
} from "../pageobjects/landingPage";

class landingPage extends basePage {
  async navBarMainVisible() {
    return await this.elementIsVisible(navBarMain);
  }

  async searchBarMain() {
    return await this.elementIsVisible(searchBarMain);
  }

  async bookMarksVisible() {
    return await this.elementIsVisible(bookMarks);
  }

  async launcherVisible() {
    return await this.elementIsVisible(launcher);
  }

  async notificationsVisible() {
    return await this.elementIsVisible(notifications);
  }

  async profileVisible() {
    return await this.elementIsVisible(profile);
  }

  async myStreamLabelVisible() {
    return await this.elementIsVisible(myStreamLabel);
  }

  async myStreamPublishedByAndDateVisible() {
    return await this.elementIsVisible(myStreamPublishedByAndDate);
  }

  async myNewsLabelVisible() {
    return await this.elementIsVisible(myNewsLabel);
  }

  async myNewsPublishedByAndDateVisible() {
    return await this.elementIsVisible(myNewsPublishedByAndDate);
  }

  async clickChannelsButton() {
    return await this.click(channelsButton);
  }

  async channelsLabelVisible() {
    return await this.elementIsVisible(channelsLabel);
  }

  async channelsSearchBarEnabled() {
    return await this.elementIsEnabled(channelsSearchBar);
  }

  async typeInTextInChannelSearchbar() {
    await this.sendKeys(channelsSearchBar, searchBarText);
  }

  async searchResultVisible() {
    return await this.elementIsVisible(interviewChannelText);
  }

  async clickSearchResult() {
    return this.click(interviewChannelText);
  }
}
export default new landingPage();
