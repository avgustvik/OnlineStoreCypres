// if api will work  to login to an app
import { faker } from "@faker-js/faker";

export function createTestUser() {
  const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    address1: faker.location.streetAddress(),
    country: "United Kingdom",
    region: "Bristol",
    zipCode: faker.location.zipCode("#####"),
    loginName: faker.internet.username().replace(/\W/g, '').slice(0,10),
    password: faker.internet.password({ length: 8 })
  };

  cy.log(`REGISTER loginName: ${user.loginName}`);
  cy.log(`REGISTER password: ${user.password}`);

  return cy.request("POST", "/api/register", user).then(() => user);
}
