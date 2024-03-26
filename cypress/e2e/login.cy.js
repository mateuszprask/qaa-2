import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

describe("Zadanie 3.", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  afterEach(() => {
    homePage.logout();
  });

  it("Log in with user888@gmail.com and 1234567890", () => {
    loginPage.login("user888@gmail.com", "1234567890");
  });

  it("Log in with testowyqa@qa.team and QA!automation-1", () => {
    loginPage.login("testowyqa@qa.team", "QA!automation-1");
  });
});
