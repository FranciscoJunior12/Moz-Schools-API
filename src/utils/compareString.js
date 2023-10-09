
const unorm = require("unorm");

// Function to remove accents from a string
function removeAccents(str) {
    return unorm.nfkd(str).replace(/[\u0300-\u036f]/g, "");
}

// Function to compare two strings without considering accents and case sensitivity
exports.compareStringWithoutAccents = (str1, str2) => {
    const str1Normalized = removeAccents(str1).toLowerCase();
    const str2Normalized = removeAccents(str2).toLowerCase();

    return str1Normalized === str2Normalized;
}


