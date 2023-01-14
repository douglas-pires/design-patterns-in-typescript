type TransportTypes = "Car" | "Truck" | "Drone";

// Every time we add a new transport type, we need to add a new if statement
// to the deliver method. This is a violation of the Open/Closed Principle.
class Truck {
  deliver(vehicle: TransportTypes): void {
    if (vehicle === "Truck") {
      console.log("Delivering by truck");
    }

    if (vehicle === "Car") {
      console.log("Delivering by car");
    }

    if (vehicle === "Drone") {
      console.log("Delivering by drone");
    }
  }
}

const truck = new Truck();

truck.deliver("Car");
