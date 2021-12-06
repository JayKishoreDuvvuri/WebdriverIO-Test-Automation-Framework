import basePage from "./basePage";
import { interviewChannelPageUrl } from "../config";
import {
  interviewChannelHeaderTitle,
  postsButton,
  burgerButton,
  viewPostOption,
  editPostOption,
  post,
  interviewAccountTwoLabel,
  interviewChannelLabel,
  reactions,
  reactionHaHa,
  reactionUnderPost,
  reactionNumberDisplayedAsOne,
  postReactionIcon,
  postReactiontext,
  cancelButton,
  postOptionsButton,
  updateButton,
  shareAsAnnouncementOption,
  shareAsAnnouncementTitle,
  shareAnnouncementText,
  announcementExpiryLabel,
  announcementDropDown,
  shareButton,
  areYouSureLabel,
  areYouSureMessage,
  announcementTab,
  announcementBoxLabel,
  announcementBoxMessage,
} from "../pageobjects/interviewChannelPage";

class interviewChannelPage extends basePage {
  async headerTitleVisible() {
    return await this.elementIsVisible(interviewChannelHeaderTitle);
  }

  async clickPostsTab() {
    await this.elementIsEnabled(postsButton);
    return await this.click(postsButton);
  }

  async selectViewPostOption() {
    await this.click(burgerButton);
    return await this.click(viewPostOption);
  }

  async selectEditPostOption() {
    await this.click(burgerButton);
    return await this.click(editPostOption);
  }

  async postVisible() {
    return await this.elementIsVisible(post);
  }

  async interviewAccountTwoLabelVisible() {
    return await this.elementIsVisible(interviewAccountTwoLabel);
  }

  async interviewChannelLabelVisible() {
    return await this.elementIsVisible(interviewChannelLabel);
  }

  async hover() {
    await this.mouseHover(reactions);
    return this.click(reactionHaHa);
  }

  async reactionUnderThePostVisible() {
    return await this.elementIsVisible(reactionUnderPost);
  }

  async reactionNumberDisplayedAsOneVisible() {
    return await this.elementIsVisible(reactionNumberDisplayedAsOne);
  }

  async postReactionIconVisible() {
    return await this.elementIsVisible(postReactionIcon);
  }

  async postReactiontextasHaHaVisible() {
    return await this.elementIsVisible(postReactiontext);
  }

  async goToUrl() {
    super.visit(interviewChannelPageUrl);
  }

  async cancelButtonIsEnabled() {
    return await this.elementIsEnabled(cancelButton);
  }

  async postOptionsButtonIsEnabled() {
    return await this.elementIsEnabled(postOptionsButton);
  }

  async updateButtonIsEnabled() {
    return await this.elementIsEnabled(updateButton);
  }

  async clickPostOptionsButton() {
    return await this.click(postOptionsButton);
  }

  async clickShareAsAnnouncementOption() {
    return await this.click(shareAsAnnouncementOption);
  }

  async shareAnnouncementTitleVisible() {
    return await this.elementIsVisible(shareAsAnnouncementTitle);
  }

  async shareAnnouncementTextVisible() {
    return await this.elementIsVisible(shareAnnouncementText);
  }

  async announcementExpiryLabelIsVisible() {
    return await this.elementIsVisible(announcementExpiryLabel);
  }

  async announcementDropDownIsVisible() {
    return await this.elementIsVisible(announcementDropDown);
  }

  async verifyShareButtonButtonIsEnabled() {
    return await this.elementIsEnabled(shareButton);
  }

  async clickShareButton() {
    return await this.click(shareButton);
  }

  async areYouSureLabelIsVisible() {
    return await this.elementIsVisible(areYouSureLabel);
  }

  async areYouSureMessageTextIsVisible() {
    return await this.elementIsVisible(areYouSureMessage);
  }

  async clickOnAnnouncementTab() {
    return await this.click(announcementTab);
  }

  async announcementBoxLabelIsVisible() {
    return await this.elementIsVisible(announcementBoxLabel);
  }

  async announcementBoxMessageIsVisible() {
    return await this.elementIsVisible(announcementBoxMessage);
  }
}
export default new interviewChannelPage();
