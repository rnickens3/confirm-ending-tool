# confirm-ending-tool

## Summary
This funciton checks the ending of one string, and determines if it ends with a second string.

## Usage
```javascript
function confirmEnding(str1, str2) {
    return str1.slice(-str2.length) === str2;
}

// Example:
console.log(confirmEnding("Hello world", "world")); // true
console.log(confirmEnding("Hello world", "hello")); // false
```
## How it Works
This function checks if one string ends with a target string. The negative value will make the length method count backwards. It will check if that value is equal to the first string. If the value isn't the same, it will return false.
