var originalSentence = prompt("Enter a sentence here.");
var lastLetter = (originalSentence.charAt(originalSentence.length - 1));
var firstLetter = originalSentence.charAt(0);
var newString = (lastLetter + firstLetter).toUpperCase();
alert(newString);
