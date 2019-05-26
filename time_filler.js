var timesArray = ["08:30", "19:10", "19:20", "19:40", "19:50", "20:00", "20:10", "20:40", "20:50", "01:40"];

var fill_time = function(timesArray, hoursInterval, minutesInterval) {
  var totalInterval = hoursInterval * (60 / minutesInterval);
  for (var i = 0, j = 1; j < totalInterval; i++, j++) {
    var curr = timesArray[i].split(":");
    var currTotal = parseInt(curr[0]) * 60 + parseInt(curr[1]);
    if (j <= timesArray.length - 1) {
      var next = timesArray[j].split(":");
      var nextTotal = parseInt(next[0]) * 60 + parseInt(next[1]);
      if (nextTotal < currTotal) nextTotal += 24 * 60;
      if (nextTotal - currTotal <= minutesInterval) continue;
    }
    var aux = currTotal + minutesInterval;
    timesArray.splice(j, 0, ("0" + (Math.floor(aux / 60) % 24)).slice(-2) + ":" + ("0" + (aux % 60)).slice(-2));
  }
};

fill_time(timesArray, 24, 10);

console.log(" ");
console.log(timesArray.length);
console.log(timesArray.join());
console.log(" ");

var print_ticks = function(timesArray, hoursInterval, minutesInterval, ticksInMinutes) {
  var totalTicks = hoursInterval * (60 / ticksInMinutes);
  var tickOffset = ticksInMinutes / minutesInterval;
  for (var i = 0; i < totalTicks; i++) console.log(timesArray[i * tickOffset]);
};

print_ticks(timesArray, 24, 10, 120);
