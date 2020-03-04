function theCityThatAlwaysSleeps() {
  let getCity;

  if (true) {
    let city = "Seattle";
    getCity = function() {
      return city;
    }
  }

  return getCity();
}


for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}
