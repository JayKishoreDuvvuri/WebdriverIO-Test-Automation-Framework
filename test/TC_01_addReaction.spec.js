// ### 1.  Login to the website with Google sign in
// ### 2.  Enter Username and password
// ### 3.  User login to to Happeo Home/Landing page. Check the Home page url
// ### 4.  Verify the Logo and main Nav bar on the Home/Landing page
// ### 5.  Verify the search bar enabled on the Home/Landing page
// ### 6.  Verify Bookmarks and Launcher are visible to the user on the Home/Landing page
// ### 7.  Verify Notifications and Profile are visible on th Home/Landing page
// ### 8.  Verify My Stream Label and its published by and date is visible
// ### 9.  Verify My Stream Label and its published by and date is visible
// ### 10. Verify Channels menu is enabled and Click on Channels Menu on Home page
// ### 11. Verify Search bar within channels menu is enabled and type in text "Interview Channel” in Search bar
// ### 12. Verify search results shows as "Search results (1)" is visible
// ### 13. Verify "Interview Channel" which appears in Search results is visible
// ### 14. Click on it and navigate to interview channel page and verify the Title and Url
// ### 15. Verify the Header of the interview channel page
// ### 16. Click on the option Posts to see a list of posts
// ### 17. Click on the burger three dot button from the First post displayed and select view post option
// ### 17. Verify the Title and url of the Interview Channel page where the post is selected
// ### 18. Hover on to the reactions Icon from the post and select a reaction "Ha ha"
// ### 19. Verify the "Ha ha" reaction is added successfully to the post

import LoginPage from "../pages/loginPage";
import LandingPage from "../pages/landingPage";
import InterviewChannelPage from "../pages/interviewChannelPage";
import {
  landingPageTitle,
  landingPageUrl,
  interviewChannelPageUrl,
  interviewChannelPageTitle,
  viewPostUrl,
} from "../config";

describe("Add Reaction - Test", function () {
  before(async function () {
    await LoginPage.loginWithGoogleSignIn();
  });

  it("Check the title and url of the Landing Page", async function () {
    const page = await browser.getUrlAndTitle();
    expect(page.title).to.equal(landingPageTitle);
    expect(page.url).to.include(landingPageUrl);
  });

  it("Verify the Logo and Nav bar main visible on Home page ", async function () {
    const isDisplayed = await LoginPage.logoVisible();
    expect(isDisplayed).to.be.true;
    const isVisible = await LandingPage.navBarMainVisible();
    expect(isVisible).to.be.true;
  });

  it("Verify Search bar main is visible", async function () {
    const isDisplayed = await LandingPage.searchBarMain();
    expect(isDisplayed).to.be.true;
  });

  it("Verify bookmarks, launcher, notifications, profile buttons are visible on the Nav bar of Home page", async function () {
    var isVisible = await LandingPage.bookMarksVisible();
    expect(isVisible).to.be.true;
    var isVisible = await LandingPage.launcherVisible();
    expect(isVisible).to.be.true;
    var isDisplayed = await LandingPage.notificationsVisible();
    expect(isDisplayed).to.be.true;
    var isDisplayed = await LandingPage.profileVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Verify My Stream label and My Stream published and date labels are visible on Home Page", async function () {
    const isVisible = await LandingPage.myStreamLabelVisible();
    expect(isVisible).to.be.true;
    const isDisplayed = await LandingPage.myStreamPublishedByAndDateVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Verify My News label and My News published and date labels are visible on Home Page", async function () {
    const isVisible = await LandingPage.myNewsLabelVisible();
    expect(isVisible).to.be.true;
    const isDisplayed = await LandingPage.myNewsPublishedByAndDateVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Click on the Channels button to open channels Search bar and verify Channels label", async function () {
    await LandingPage.clickChannelsButton();
    const isVisible = await LandingPage.channelsLabelVisible();
    expect(isVisible).to.be.true;
  });

  it("Verify Channels Search bar is enabled and type text 'Interview Channel' in the search bar", async function () {
    const isEnabled = await LandingPage.channelsSearchBarEnabled();
    expect(isEnabled).to.be.true;
    await LandingPage.typeInTextInChannelSearchbar();
  });

  it("Verify whether search result visible and click on it", async function () {
    const isVisible = await LandingPage.searchResultVisible();
    expect(isVisible).to.be.true;
    await LandingPage.clickSearchResult();
  });

  it("Verify whether user navigated to Interview channel by checking the title and url on Interview Channel Page", async function () {
    const isVisible = await InterviewChannelPage.headerTitleVisible();
    expect(isVisible).to.be.true;
    const page = await browser.getUrlAndTitle();
    expect(page.title).to.equal(interviewChannelPageTitle);
    expect(page.url).to.equal(interviewChannelPageUrl);
  });

  it("Verify Posts tab is enabled and click on it", async function () {
    await InterviewChannelPage.clickPostsTab();
  });

  it("Click on the burger button and select view post", async function () {
    await InterviewChannelPage.selectViewPostOption();
  });

  it("Verifty whether user is on the correct page by checking title, url and header", async function () {
    const page = await browser.getUrlAndTitle();
    expect(page.title).to.equal(interviewChannelPageTitle);
    expect(page.url).to.equal(viewPostUrl);
    const isVisible = await InterviewChannelPage.headerTitleVisible();
    expect(isVisible).to.be.true;
  });

  it("Verify the Total post with publishedByAndDate and publishedLocationAndCreatorFullName is visible", async function () {
    const isVisible = await InterviewChannelPage.postVisible();
    expect(isVisible).to.be.true;
    var isDisplayed =
      await InterviewChannelPage.interviewAccountTwoLabelVisible();
    expect(isDisplayed).to.be.true;
    var isDisplayed = await InterviewChannelPage.interviewChannelLabelVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Hover to the reaction icon and Click it", async function () {
    await InterviewChannelPage.hover();
  });

  it("Verify the Total post with publishedByAndDate and publishedLocationAndCreatorFullName is visible", async function () {
    const isVisible = await InterviewChannelPage.reactionUnderThePostVisible();
    expect(isVisible).to.be.true;
    var isDisplayed =
      await InterviewChannelPage.reactionNumberDisplayedAsOneVisible();
    expect(isDisplayed).to.be.true;
    var isDisplayed = await InterviewChannelPage.postReactionIconVisible();
    expect(isDisplayed).to.be.true;
    var isDisplayed =
      await InterviewChannelPage.postReactiontextasHaHaVisible();
    expect(isDisplayed).to.be.true;
  });
});
