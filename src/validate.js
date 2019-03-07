function validate(properties) {
  var vehicleTypes = ["auto", "airplane", "boat"];

  var requiredFields = {
    auto: ["type", "name", "speed", "capacity", "body"],
    airplane: ["type", "name", "speed", "capacity", "wingspan"],
    boat: ["type", "name", "speed", "capacity", "maxpower"]
  };

  var errors = [];

  // Not specified or wrong vehicle type is a critical error. We can't even continue validation.
  if (!properties.type || vehicleTypes.indexOf(properties.type) < 0) {
    return ["Wrong vehicle type '" + properties.type + "'"];
  }

  var requiredFieldsForVehicle = requiredFields[properties.type];
  var actualVehicleFields = Object.keys(properties);

  var errors = [];

  for (var i = 0; i < requiredFieldsForVehicle.length; i++) {
    var currentField = requiredFieldsForVehicle[i];
    if (actualVehicleFields.indexOf(currentField) < 0) {
      errors.push(
        "Missing field '" +
          currentField +
          "' required for vehicle type '" +
          properties.type +
          "'" +
          (properties.name ? " with name '" + properties.name + "'" : "")
      );
    }
  }

  return errors;
}
