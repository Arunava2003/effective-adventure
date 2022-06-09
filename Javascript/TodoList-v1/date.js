
// ** Local module for date

exports.getDate = function () {
    const options = { weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
    };
    const today = new Date(); // return current date
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
    
    const today = new Date(); // return current date
    
    const options = { weekday: 'long'};
    return today.toLocaleDateString("en-US", options);
}