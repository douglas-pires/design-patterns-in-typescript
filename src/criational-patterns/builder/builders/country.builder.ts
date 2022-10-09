import { Country } from "../interfaces/country.interface";

export class CountryBuilder {
  constructor(private country: Partial<Country> = {}) {
    Object.assign(this, country);
  }

  withName(name: string): CountryBuilder {
    this.country.name = name;

    return this;
  }

  withCapital(capital: string): CountryBuilder {
    this.country.capital = capital;

    return this;
  }

  withPopulation(population: number): CountryBuilder {
    this.country.population = population;

    return this;
  }

  withArea(area: number): CountryBuilder {
    this.country.area = area;

    return this;
  }

  withCurrency(currency: string): CountryBuilder {
    this.country.currency = currency;

    return this;
  }

  withLanguage(language: string): CountryBuilder {
    this.country.language = language;

    return this;
  }

  build(): Country {
    return this.country as Country;
  }
}
