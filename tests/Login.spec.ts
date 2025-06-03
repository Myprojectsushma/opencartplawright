import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/Homepage'
//import { RegistrationPage } from '../pages/REgistrationpage'
//import { RandomDataUtil } from '../utilities/randomDataGenerators'
import { TestConfig } from '../test.config'
import { LoginPage } from '../pages/Loginpage'
import { MyAccountPage } from '../pages/MyAccountPage'


let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;

// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl); // Navigate to base URL

  // Initialize page objects
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  myAccountPage = new MyAccountPage(page);
});

// Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab (good practice in local/dev run)
});


test('User login test @master @sanity @regression',async()=>{

    //Navigate to Login page via Home page

    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter valid credentials and log in
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();

    //alternatevly
    //await loginPage.login(config.email,config.password);

    //Verify successful login by checking 'My Account' page presence
    const isLoggedIn=await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();

})
