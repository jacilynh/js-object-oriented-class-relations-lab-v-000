// A driver has many trips, and has many passengers through trips.
// `trips()` - returns all of the trips that a driver has taken
// `passengers()` - returns all of the passengers that a driver has taken on a trip

  let store = { drivers: [], passengers: []};
  
  let driverId = 0;
  
  class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
      
      store.drivers.push(this);
    }
  }
  
// A passenger has many trips, and has many drivers through trips.
// `trips()` - returns all of the trips that a passenger has taken
// `drivers()` - returns all of the drivers that has taken a passenger on a trip
  let passengerId = 0;

  class Passenger {
    constructor(name) {
      this.id = ++passengerId;
      this.name = name;
      
      store.passengers.push(this);
    }
  }

// `Trip` class:
//   + A trip belongs to a driver and belongs to a passenger.
//   + `new Trip()` - initialized with an instance of driver and an instance of passenger; returns a JavaScript that object has attributes `id`, `driverId`, and `passengerId`
//   + `driver()` - returns the driver associated with the trip
//   + `passenger()` - returns the passenger associated with the trip