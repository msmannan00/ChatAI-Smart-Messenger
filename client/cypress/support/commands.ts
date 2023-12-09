import {PageIdleDetector} from "./PageIdleDetector";

declare global {
  namespace Cypress {
    interface Chainable {
      // @ts-ignore
      waitForLoader: (waitForHTTP: boolean = true) => void;
      takeScreenshot: (filename: string, timeout?: number, locator?: any) => void;
      waitForUrl: (url: string, timeout?: number) => Chainable<any>;
    }
  }
}

Cypress.Commands.add("takeScreenshot", (filename, timeout: number = 0, _?: any) => {
  if (!Cypress.env("takeScreenshots")) {
    return;
  }

  cy.wait(timeout);
  cy.get("html, body").invoke(
    "attr",
    "style",
    "height: auto; scroll-behavior: auto;"
  );

  return cy.document().then((doc) => {
    cy.viewport(1280, doc.body.scrollHeight);

    cy.screenshot("../" + filename, {
      overwrite: true
    });
  });
});

Cypress.Commands.add("waitForLoader", (waitForHTTP: boolean = true) => {
  cy.intercept("**").as("httpRequests");

  cy.get("#PageOverlay", {timeout: 1000, log: false})
    .should(($overlay) => {
      return new Cypress.Promise((resolve, _) => {
        const startTime = Date.now();

        const checkVisibility = () => {
          if (Cypress.$($overlay).is(":visible")) {
            resolve();
          } else if (Date.now() - startTime > 2000) {
            resolve();
          } else {
            setTimeout(checkVisibility, 100);
          }
        };

        checkVisibility();
      });
    })
    .then(() => {
      if(waitForHTTP){
        cy.wait("@httpRequests");
      }
    });
});


Cypress.Commands.add("waitForUrl", (url: string, timeout?: number) => {
  const t = timeout === undefined ? Cypress.config().defaultCommandTimeout : timeout;
  return cy.url().should("include", url, {timeout: t});
});

