describe("httpbin tests", () => {
  it("response code should be 200 - no method", () => {
    cy.request("https://httpbin.org").then((response) => {
      const status = response.status;
      assert.equal(200, status);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    method: "POST",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("response code should be 200 - method POST", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  it("response code should be 405 - method GET", () => {
    cy.request(request).then((response) => {
      assert.equal(405, response.status);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    url: "https://httpbin.org/get",
    qs: {
      key: "value",
    },
    failOnStatusCode: false,
  };

  it("response code should be 200 - qs", () => {
    cy.request(request).then((response) => {
      assert.equal("value", response.body.args.key);
    });
  });
});

describe("httpbin tests", () => {
  const bodyData = {
    bodyKey: "bodyValue",
  };

  const request = {
    method: "POST",
    url: "https://httpbin.org/post",
    body: bodyData,
    failOnStatusCode: false,
  };

  it("complex post test", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      customHeader: "customValue",
    },
    failOnStatusCode: false,
  };

  it("test that header set correctly", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("customValue", response.requestHeaders.customHeader);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "user-agent": "My test user-agent",
    },
    failOnStatusCode: false,
  };

  it("test that user-agent set correctly", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      Cookie: "cookieName=cookieValue",
    },
    failOnStatusCode: false,
  };

  it("test send cookie", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("cookieName=cookieValue", response.requestHeaders["Cookie"]);
    });
  });
});

describe("reqres tests", () => {
  const request = {
    method: "GET",
    url: "https://reqres.in/api/users/2",
  };

  it("reqres - console.log, cy.log", () => {
    cy.request(request).then((response) => {
      //debugger;
      console.log(response);
      cy.log(response.body.data.email);
      cy.log(response.body.data.last_name);
      cy.log("Cypress is fun!");
      assert.equal("janet.weaver@reqres.in", response.body.data.email);
    });
  });
});

describe("httpbin tests", () => {
  it("test random ids + test duration", () => {
    for (let i = 0; i < 10; i++) {
      const randomId = getRandomInt(10000000000);

      const request = {
        url: "https://httpbin.org/headers",
        id: randomId,
      };

      cy.request(request).then((response) => {
        cy.log(randomId);
        assert.isTrue(response.status == 200);
        assert.isTrue(response.duration <= 15000);
      });
    }
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe("goit tests", () => {
  it("alias", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").as("email");
    cy.get("#user_password").as("pass");
    cy.get("@email").should("be.visible");
    cy.get("@pass").should("be.visible");
    cy.contains("Log in").should("be.visible");
  });
});
