// Code your solution here:
function driversWithRevenueOver(drivers, oldRevenue){
  return drivers.filter(function(driver){return driver.revenue> oldRevenue });

}

function driverNamesWithRevenueOver(drivers, oldRevenue){
  return driversWithRevenueOver(drivers, oldRevenue).map(driver =>driver.name);
}

function exactMatch(drivers, key){
  return drivers.filter(driver=>
  driver.name === key.name || driver.revenue === key.revenue);
}

function exactMatchToList(drivers, key){
  return exactMatch(drivers, key).map(driver => driver.name );

}
