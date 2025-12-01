import { faker } from '@faker-js/faker';

export function randomLogin() {
  const firstName = faker.person.firstName().toLowerCase();
  const lastName = faker.person.lastName().toLowerCase();
  const randomNum = Math.floor(Math.random() * 100);
  return `${firstName}${lastName}${randomNum}`;
}

export function randomEmail() {
  const firstName = faker.person.firstName().toLowerCase();
  const lastName = faker.person.lastName().toLowerCase();
  const randomNum = Math.floor(Math.random() * 100000);
  return `${firstName}.${lastName}${randomNum}@gmail.com`; 
}

export function randomFirstName() {
  const firstName = faker.person.firstName().toLowerCase();
  return `${firstName}`;
}

export function randomLastName() {
  const lastName = faker.person.lastName().toLowerCase();
  return `${lastName}`;
}
