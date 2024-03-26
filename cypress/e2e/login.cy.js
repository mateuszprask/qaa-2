import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

describe("Zadanie 3.", () => {
  it("Log in with user888@gmail.com and 1234567890", () => {
    loginPage.visit();
    loginPage.login("user888@gmail.com", "1234567890");
    homePage.logout();
  });

  it("Log in with testowyqa@qa.team and QA!automation-1", () => {
    loginPage.visit();
    loginPage.login("testowyqa@qa.team", "QA!automation-1");
    homePage.logout();
  });
});
