const util = require("./config");

exports.config = {
  runner: "local",

  specs: ["./test/**/*.js"],

  maxInstances: 5,

  capabilities: [
    {
      maxInstances: 3,
      browserName: "chrome",
      // chromeOptions: {
      //   args: ["headless", "disable-gpu"],
      // },
    },
  ],

  logLevel: "trace",

  bail: 0,

  baseUrl: util.baseUrl,

  waitforTimeout: util.waitforTimeout,

  connectionRetryTimeout: util.connectionRetryTimeout,

  connectionRetryCount: util.connectionRetryCount,

  services: ["selenium-standalone"],
  port: 9999,
  args: {
    seleniumArgs: ["-port", "9999"],
  },

  framework: "mocha",

  specFileRetries: 2,

  reporters: [
    [
      "allure",
      {
        // test results will generate in the directory mentioned below
        outputDir: "allure-results",
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: util.mochaTimeout,
    compilers: ["js:@babel/register"],
  },

  before: function (capabilities, specs) {
    require("@babel/register");

    const chai = require("chai");
    const chaiWebdriver = require("chai-webdriverio").default;

    chai.use(chaiWebdriver(browser));

    global.assert = chai.assert;
    global.should = chai.should;
    global.expect = chai.expect;

    browser.addCommand("getUrlAndTitle", async function () {
      return {
        url: await this.getUrl(),
        title: await this.getTitle(),
      };
    });

    browser.addCommand("scrollIntoView", async function (selector) {
      try {
        const element = await $(selector);
        await element.waitForExist();
        await browser.execute("arguments[0].scrollIntoView(true);", element);
      } catch (Error) {
        throw new Error(
          "Could not Scroll into Selector:",
          +(await $(selector))
        );
      }
    });
  },

  after: function (result, capabilities, specs) {
    var name = "ERROR-chrome-" + Date.now();
    browser.saveScreenshot("./errorShots/" + name + ".png");
  },
};
