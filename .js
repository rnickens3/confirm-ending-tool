//The ending of str1 will be checked if it ends with str2. Returns false if it doesn't. 
function confirmEnding(str1, str2) {
    if (str1.slice(-str2.length) === str2) {
        return true;
    } else {
        return false;
    }
}
