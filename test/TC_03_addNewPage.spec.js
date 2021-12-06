// ### 1.  Login to the website with Google sign in
// ### 2.  Click on Pages Button on the Home Page
// ### 3.  Search bar is opened
// ### 4.  Enter text "This Page Group" in the search bar
// ### 5.  See the Search results are visible and click on "This Page Group"
// ### 6.  User is navigated to pages (First Page). Verify the title and url
// ### 7.  Open “Edit” menu
// ### 8.  Open “Manage Pages”
// ### 9.  Add new page nested under “First Page”

import Pages from "../pages/pages";
import LoginPage from "../pages/loginPage";
import {
  landingPageUrl,
  landingPageTitle,
  pagesTitle,
  pagesUrl,
} from "../config";

describe("Add New Page nested under First Page - Test", function () {
  before(async function () {
    await LoginPage.loginWithGoogleSignIn();
  });

  it("Check the title and url of the Landing Page", async function () {
    const page = await browser.getUrlAndTitle();
    expect(page.title).to.equal(landingPageTitle);
    expect(page.url).to.include(landingPageUrl);
  });

  it("Check pages button is enabled and Click on the pages button to open pages Search bar", async function () {
    const isEnabled = await Pages.pagesButtonEnabled();
    expect(isEnabled).to.be.true;
    await Pages.clickPagesButton();
  });

  it("Check pages Search bar is enabled and Type text in the search bar", async function () {
    const isEnabled = await Pages.searchBarEnabled();
    expect(isEnabled).to.be.true;
    await Pages.typeTextinSearchbar();
  });

  it("Verify page search results are visible and click on it", async function () {
    const isVisible = await Pages.pageSearchResults();
    expect(isVisible).to.be.true;
    await Pages.clickSearchResults();
  });

  it("Verify user is navigated to the correct page and verify Page tags label is visible", async function () {
    const page = await browser.getUrlAndTitle();
    expect(page.title).to.equal(pagesTitle);
    expect(page.url).to.include(pagesUrl);
    const isVisible = await Pages.pagesTagVisible();
    expect(isVisible).to.be.true;
  });

  it("Click on edit menu to verify Page Settings label visible and click on Manage Pages Menu to see Manage Pages label visible", async function () {
    await Pages.clickEditMenu();
    const isVisible = await Pages.pageSettingsLabelIsVisible();
    expect(isVisible).to.be.true;
    await Pages.clickManagePagesMenu();
    const isDisplayed = await Pages.managePagesTitleIsVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Check First Page sub-heading label is visible under Manage Pages heading label", async function () {
    const isVisible = await Pages.firstPageLabelIsVisible();
    expect(isVisible).to.be.true;
  });

  it("Click on First Page: burger button and click on Add sub page option", async function () {
    await Pages.clickPagesBurgerButton();
    await Pages.clickAddSUbPageOption();
  });

  it("Verify Add Navigation Item title, New Page and New Link are visible ", async function () {
    const isVisible = await Pages.addNavigationTitleIsVisible();
    expect(isVisible).to.be.true;
    var isDisplayed = await Pages.newPageButtonVisible();
    expect(isDisplayed).to.be.true;
    var isDisplayed = await Pages.newLinkVisible();
    expect(isDisplayed).to.be.true;
  });

  it("Type and create new Page and verify the page name is nested under First Page", async function () {
    const pageName = await Pages.typePageName();
    console.log("New Page Name is:", pageName);

    var isEnabled = await Pages.pagesCreateButtonIsEnabled();
    expect(isEnabled).to.be.true;

    await Pages.clickCreateButton();

    const isVisible = await Pages.newPageTitleIsVisible();
    expect(isVisible).to.be.true;

    const element = `//a[text()='${pageName}']`;
    const isDisplayed = await Pages.newPageElementIsVisble(element);
    expect(isDisplayed).to.be.true;
  });
});
