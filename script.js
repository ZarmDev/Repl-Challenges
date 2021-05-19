const content = document.getElementsByClassName('content')[0];

let challenges = [['Make a portfolio', '05/01/2021-05/31/2021', 'Make a portfolio and submit your repls', 'vibrant']];

var past = [];
var current = [];
var upcoming = [];

for (var i = 0; i < challenges.length; i++) {
  // Date
  //console.log(challenges[i][1].slice(0, 10));
  //console.log(challenges[i][1].slice(11, challenges[i][1].length));
  var d = new Date();
  var n = d.getMonth();
  var n2 = d.getDate();
  // Check if in year
  if (d.getFullYear() > challenges[i][1].slice(6, 10)) {
    // past
    past.push(challenges[i])
  } else if (d.getFullYear() < challenges[i][1].slice(6, 10)) {
    // upcoming
    upcoming.push(challenges[i])
  } else {
    // current
    //console.log(n + 1, Number(challenges[i][1].slice(0, 2)) , n + 1, Number(challenges[i][1].slice(11, 13)), n + 1, Number(challenges[i][1].slice(0, 2)));
    if (n + 1 >= Number(challenges[i][1].slice(0, 2)) && n + 1 <= Number(challenges[i][1].slice(11, 13))) {
      // if month is equal to the end of range month then check the day and see if it's lower or equal to the day in end of range
      // else (if month is the first range month then check the day and compare with first range month)
      if (n + 1 == Number(challenges[i][1].slice(0,2))) {
        if (n2 >= Number(challenges[i][1].slice(3, 5))) {
          console.log(n2, Number(challenges[i][1].slice(3, 5)));
          current.push(challenges[i])
        } else {
          upcoming.push(challenges[i])
        }
      } else if (n + 1 == Number(challenges[i][1].slice(11, 13))) {
        if (n2 <= Number(challenges[i][1].slice(14, 16))) {
          current.push(challenges[i])
        } else {
          past.push(challenges[i])
        }
      }
    }
  }
}
console.log(`p ${past} c ${current} u ${upcoming}`);