const removeFromArray = function(array, ...args) {
    return array.filter(itemToRemove => !args.includes(itemToRemove))
};

// Do not edit below this line
module.exports = removeFromArray;
