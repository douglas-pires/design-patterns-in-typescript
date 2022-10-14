import { AutomaticGear, ManualGear } from "./modules/gears";
import { Car, Truck } from "./modules/vehicle";

class Application {
  start() {
    const manualGear = new ManualGear();
    const automaticGear = new AutomaticGear();
    const manualCar = new Car(manualGear);
    const autoCar = new Car(automaticGear);
    const autoTruck = new Truck(automaticGear);

    manualCar.addGear();
    autoCar.addGear();
    autoTruck.addGear();
  }
}

const app = new Application();

app.start();
