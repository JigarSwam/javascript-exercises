const fibonacci = function(nth) {
    let formattedNth

    if (typeof nth !== "number") { formattedNth = parseInt(nth) } else formattedNth = nth;

    if (nth === 0) { return 0 } 
    if (nth < 0) { return "OOPS" }

    let base = [0, 1];

    // generate the fibonacci numbers up to the nth number
    for(let i = 1; i < formattedNth; i++) {
        base.push(base[i] + base[i-1])
    }

    return base[formattedNth];

};

// Do not edit below this line
module.exports = fibonacci;
