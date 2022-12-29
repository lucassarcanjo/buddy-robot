import { faker } from "@faker-js/faker"

class Randomizer {
  constructor() {}

  public lorem() {
    return faker.lorem.slug()
  }
}

export default Randomizer
