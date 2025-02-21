const palindromes = function (string) {

    let punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let spaceless = punctuationless.replace(/\s/g, "");

    return spaceless.split("").reverse().join("") === spaceless;

};

// Do not edit below this line
module.exports = palindromes;
