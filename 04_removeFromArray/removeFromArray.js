const removeFromArray = function(Array, ...args) {
return Array.filter(item => !args.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
