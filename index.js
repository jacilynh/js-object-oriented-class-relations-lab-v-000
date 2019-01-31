// A driver has many trips, and has many passengers through trips.
// `trips()` - returns all of the trips that a driver has taken
// `passengers()` - returns all of the passengers that a driver has taken on a trip

  let store = { drivers: [], passengers: [], trips: []};
  
  let driverId = 0;
  
  class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
      
      store.drivers.push(this);
    }
    
    trips() {
      return store.trips.filter((trip) => {
        return trip.driverId == this.id;
      })
    }
    
    passengers() {
      return this.trips().map((trip) => {
        return trip.passenger();
      })
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
    
    trips() {
      return store.trips.filter((trips) => {
        return trips.passengerId == this.id;
      })
    }
    
    drivers() {
      return this.trips().map((trip) => {
        return trip.driver();
      })
    }
  }

// `Trip` class:
//   + A trip belongs to a driver and belongs to a passenger.
//   + `new Trip()` - initialized with an instance of driver and an instance of passenger; returns a JavaScript that object has attributes `id`, `driverId`, and `passengerId`
//   + `driver()` - returns the driver associated with the trip
//   + `passenger()` - returns the passenger associated with the trip
  let tripId = 0;

  class Trip {
    constructor(driver, passenger) {
      this.id = ++tripId;
      this.driverId = driverId;
      this.passengerId = passengerId;

      store.trips.push(this);
    }
    driver() {
      return store.drivers.find((driver) => {return driver.id === this.driverId});
    }
    
    passenger() {
      return store.passengers.find((passenger) => {return passenger.id === this.passengerId});
    }
  }
  
  