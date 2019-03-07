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

  data.forEach(vehicle => {
    if (vehicle.type === "auto") {
      autos.push(new Auto(vehicle));
    } else if (vehicle.type === "airplane") {
      airplanes.push(new Airplane(vehicle));
    } else if (vehicle.type === "boat") {
      boats.push(new Boat(vehicle));
    } else {
      throw new Error("Unknown vehicle type '" + vehicle.type + "'.");
    }
  });

  return { autos: autos, airplanes: airplanes, boats: boats };
}