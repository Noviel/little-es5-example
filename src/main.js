function main() {
  var vehicles = {
    autos: [],
    airplanes: [],
    boats: []
  };

  try {
    mockGetServerData(mockData, function() {
      vehicles = parseVehiclesData(mockData);
      updateHtml(vehicles);
    }, 1000);
  } catch (error) {
    console.warn("Something went wrong while creating vehicles data: ", error);
  }
}

main();