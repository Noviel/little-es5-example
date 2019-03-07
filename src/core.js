function Vehicle(properties) {
  this.type = properties.type;
  this.name = properties.name;
  this.speed = properties.speed;
  this.capacity = properties.capacity;
}

function Auto(properties) {
  Vehicle.call(this, properties);

  this.body = properties.body;
}

function Airplane(properties) {
  Vehicle.call(this, properties);

  this.wingspan = properties.wingspan;
}

function Boat(properties) {
  Vehicle.call(this, properties);

  this.maxpower = properties.maxpower;
}

function parseVehiclesData(data) {
  var autos = [];
  var airplanes = [];
  var boats = [];

  data.forEach(vehicleData => {
    var errors = validate(vehicleData);
    if (errors.length) {
      console.warn("Errors with vehicle data:", errors);
    }
    if (vehicleData.type === "auto") {
      autos.push(new Auto(vehicleData));
    } else if (vehicleData.type === "airplane") {
      airplanes.push(new Airplane(vehicleData));
    } else if (vehicleData.type === "boat") {
      boats.push(new Boat(vehicleData));
    } else {
      throw new Error("Unknown vehicle type '" + vehicleData.type + "'.");
    }
  });

  return { autos: autos, airplanes: airplanes, boats: boats };
}
