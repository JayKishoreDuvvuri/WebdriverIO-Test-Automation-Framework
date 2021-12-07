# WebDriverIO - Javascript Test Automation Framework

Designed page object design pattern test automation framework on

* OS  : macOS
* IDE : Visual Studio Code

## Run application
Clone (OR) Download the repository as zip folder
```bash
git clone https://github.com/JayKishoreDuvvuri/WebdriverIO-Test-Automation-Framework.git 
```

### Install dependencies
```bash
Install node modules with command :              npm i
install as a devDependency selenium-standalone : npm i -D selenium-standalone
Install web drivers with command:                npx selenium-standalone install 
```


### Start Selenium Server
```bash
Start selenium server on your console/terminal before executing the tests 
CLI Command : npm run selenium-server (OR) npx selenium-standalone start
```


### Install Allure on your machine 
```bash
Run on Terminal (macOS): brew install allure 
https://formulae.brew.sh/formula/allure

Run on Windows: scoop install allure
https://www.programsbuzz.com/article/install-or-uninstall-allure-framework-command-line-windows-os
```


### Clean Allure Report
```bash
npm run clean  - Run on Terminal to remove the existing reports
```


### Execute tests
Run the below test command on other separate terminal side by side next to running selenium server from above point "Start Selenium Server" 
```bash
npm run test -  3 Tests executes in parallel on Chrome browser
npm run test:addReaction - Runs only single test
npm run test:publishPost - Runs only single test  
npm run test:addNewPage  - Runs only single test                 
```


### Folder Structure

    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── basePage.js                     # Base page testing functionality
    │   ├── loginPage.js                    # Login page testing functionality
    │   ├── landingPage.js                  # Home page testing functionality
    │   ├── interviewChannelPage            # Interview Channel page testing functionality
    │   ├── pages.js                        # Pages testing functionality
    │
    │ 
    ├── test                                # Test suite
    │    ├──TC_01_addReaction.spec.js       # Automated Test Script
    │    ├──TC_02_publishPost.spec.js       # Automated Test Script
    │    ├──TC_03_addNewPage.spec.js        # Automated Test Script
    │
    │
    ├── pageobjects                          # Page Objects file
    │    ├── loginPage.js                    # Login page locators
    │    ├── landingPage.js                  # Landing page Locators
    │    ├── interviewChannelPage            # Interview Channel page Locators
    │    ├── pages.js                        # Pages Locators
    │
    ├── allure-results                     
    │
    ├── allure-report                       # allure Report          [on terminal]
    │
    └─── errorShots                         # Screenshots captured for failed tests


### Generate Allure Test Report
Run on Terminal:
```bash
npm run test-report
```
