import { getLastMonthDays } from "./lib/date-utils";

class Application {
  start() {
    const days = getLastMonthDays();

    console.log(days);
  }
}

const app = new Application();

app.start();
