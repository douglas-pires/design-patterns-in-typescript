import { CountryBuilder } from "./builders";
import { Country } from "./interfaces";

class Application {
  start(): Country {
    const countryBuilder = new CountryBuilder({
      name: "Brazil",
      capital: "Brasília",
    });

    const country = countryBuilder
      .withPopulation(210147125)
      .withArea(8515767)
      .withCurrency("BRL")
      .withLanguage("Portuguese")
      .build();

    return country;
  }
}

const country = new Application().start();

console.log(country);
