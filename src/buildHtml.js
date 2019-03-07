var tableOrder = {
  auto: ["name", "speed", "capacity", "body"],
  airplane: ["name", "speed", "capacity", "wingspan"],
  boat: ["name", "speed", "capacity", "maxpower"]
};

var tableIdsByVehicleType = {
  auto: "tbl_auto",
  airplane: "tbl_air",
  boat: "tbl_boat"
};

function createOrderedProperties(properties) {
  var vehicleType = properties.type;
  var order = tableOrder[vehicleType];
  var orderedProperties = [];
  order.forEach(function(propertyName) {
    var currentProperty = properties[propertyName];
    if (!currentProperty) {
      orderedProperties.push("n/a");
    } else {
      orderedProperties.push(currentProperty);
    }
  });
  return orderedProperties;
}

function createTableRow(orderedProperties) {
  var newRow = document.createElement("tr");

  orderedProperties.forEach(function(property) {
    var cell = document.createElement("td");
    cell.textContent = property;
    newRow.appendChild(cell);
  });

  return newRow;
}

function addVehiclesToTable(vehicles) {
  var type = vehicles[0].type;
  for (var i = 0; i < vehicles.length; i++) {
    var table = document.getElementById(tableIdsByVehicleType[type]);
    table.appendChild(createTableRow(createOrderedProperties(vehicles[i])));
  }
}

function updateHtml(vehicles) {
  Object.keys(vehicles).forEach(function(vehiclesListName) {
    var vehiclesByType = vehicles[vehiclesListName];
    if (vehiclesByType && vehiclesByType.length) {
      addVehiclesToTable(vehiclesByType);
    }
  });
}