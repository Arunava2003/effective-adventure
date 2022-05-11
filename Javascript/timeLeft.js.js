function lifeInWeeks(age) {
    
    // var daysSpent = age * 365;
    // var weeksSpent = age * 52;
    // var yearSpent = age * 12;
    
    // var daysLeft = (365*90) - daysSpent;
    // var weeksLeft = (52*90) - weeksSpent;
    // var monthsLeft = (12*90) - yearSpent;
  
    // console.log("You have "+daysLeft+" days, "+weeksLeft+" weeks, and "+monthsLeft+" months left.");
    var yearsRemaining = 90 - age;
    var months = 12 * yearsRemaining;
    var weeks = 52 * yearsRemaining;
    var days = 365 * yearsRemaining;
    console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.");
}

lifeInWeeks(18);