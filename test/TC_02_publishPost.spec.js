// ### 1.  Login to the website with Google sign in
// ### 2.  Navigate to Interview Channel
// ### 3.  Edit an Existing post
// ### 4.  Publish the post as an announcement with 2 weeks as expiry from today's date

import LoginPage from "../pages/loginPage";
import InterviewChannelPage from "../pages/interviewChannelPage";
import { interviewChannelPageUrl, interviewChannelPageTitle } from "../config";

describe("Publish Post as an Annoucement - Test", function () {
  before(async function () {
    await LoginPage.loginWithGoogleSignIn();
  });

  it("Click on the Posts tab", async function () {
    await InterviewChannelPage.goToUrl();
    await InterviewChannelPage.clickPostsTab();
  });

  it("Check the title and url of the interview channel Page", async function () {
    const page = await browser.getUrlAndTitle();
    expect(page.title).to.equal(interviewChannelPageTitle);
    expect(page.url).to.include(interviewChannelPageUrl);
    const isVisible = await InterviewChannelPage.headerTitleVisible();
    expect(isVisible).to.be.true;
  });

  it("Click on the burger button and select edit post", async function () {
    await InterviewChannelPage.selectEditPostOption();
  });

  it("Verify the post have Cancel, Post Options and Update Buttons enabled", async function () {
    var isEnabled = await InterviewChannelPage.cancelButtonIsEnabled();
    expect(isEnabled).to.be.true;
    var isEnabled = await InterviewChannelPage.postOptionsButtonIsEnabled();
    expect(isEnabled).to.be.true;
    var isEnabled = await InterviewChannelPage.updateButtonIsEnabled();
    expect(isEnabled).to.be.true;
  });

  it("Click the Post Options Button", async function () {
    await InterviewChannelPage.clickPostOptionsButton();
    await InterviewChannelPage.clickShareAsAnnouncementOption();
  });

  it("Verify the popup shareannouncement title and text visible", async function () {
    const isVisible =
      await InterviewChannelPage.shareAnnouncementTitleVisible();
    expect(isVisible).to.be.true;
    const isDisplayed =
      await InterviewChannelPage.shareAnnouncementTextVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Verify the Announcement Expiry Label and dropdown are visible", async function () {
    const isVisible =
      await InterviewChannelPage.announcementExpiryLabelIsVisible();
    expect(isVisible).to.be.true;
    const isDisplayed =
      await InterviewChannelPage.announcementDropDownIsVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Verify Share Button is enabled and click on it", async function () {
    const isEnabled =
      await InterviewChannelPage.verifyShareButtonButtonIsEnabled();
    expect(isEnabled).to.be.true;
    await InterviewChannelPage.clickShareButton();
  });

  it("Verify Are You Sure? label and resppective text are visible", async function () {
    const isVisible = await InterviewChannelPage.areYouSureLabelIsVisible();
    expect(isVisible).to.be.true;
    const isDisplayed =
      await InterviewChannelPage.areYouSureMessageTextIsVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Verify Share Button is enabled again and click on Share button", async function () {
    const isEnabled =
      await InterviewChannelPage.verifyShareButtonButtonIsEnabled();
    expect(isEnabled).to.be.true;
    await InterviewChannelPage.clickShareButton();
  });

  it("Verifty whether user is on the correct page by checking title, url and header", async function () {
    const page = await browser.getUrlAndTitle();
    expect(page.title).to.equal(interviewChannelPageTitle);
    expect(page.url).to.equal(interviewChannelPageUrl);
    const isVisible = await InterviewChannelPage.headerTitleVisible();
    expect(isVisible).to.be.true;
  });

  it("Click on Announcement tab to verify Announcement box Label, Message and Text are visible", async function () {
    await InterviewChannelPage.clickOnAnnouncementTab();
    const isVisible =
      await InterviewChannelPage.announcementBoxLabelIsVisible();
    expect(isVisible).to.be.true;
    var isDisplayed =
      await InterviewChannelPage.announcementBoxMessageIsVisible();
    expect(isDisplayed).to.be.true;
  });
});
