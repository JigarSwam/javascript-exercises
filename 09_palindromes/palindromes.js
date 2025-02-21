const palindromes = function (string) {
    // filter out punctuation
    // split based on " "
    // make a copy and reverse the copy
    // compare copy to original
    let punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let spaceless = punctuationless.replace(/\s/g, "");
    console.log("PUNC", spaceless);

    return spaceless.split("").reverse().join("") === spaceless;

};

// Do not edit below this line
module.exports = palindromes;
