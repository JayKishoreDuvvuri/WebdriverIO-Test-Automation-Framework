import basePage from "./basePage";
import { baseUrl, userName, password } from "../config";
import {
  loginWithGoogle,
  loginUsername,
  loginPassword,
  nextButton,
  logo,
} from "../pageobjects/loginPage";

class loginPage extends basePage {
  constructor() {
    super(`${baseUrl}`);
  }

  async loginWithGoogleSignIn() {
    super.open();
    await this.click(loginWithGoogle);
    await this.click(loginUsername);
    await this.sendKeys(loginUsername, userName);
    await this.click(nextButton);
    await this.click(loginPassword);
    await this.sendKeys(loginPassword, password);
    await this.click(nextButton);
    return await this.waitForPageToLoad(logo);
  }

  async logoVisible() {
    return await this.elementIsVisible(logo);
  }

  async closeBrowser() {
    return super.closeBrowser();
  }
}
export default new loginPage();
