function mockGetServerData(data, callback, delay) {
  delay = delay || 120;
  setTimeout(function() {
    callback(data);
  }, delay);
}
