var originalSentence = prompt("Enter a sentence here.");
var lastLetter = (originalSentence.charAt(originalSentence.length - 1));
var firstLetter = originalSentence.charAt(0);
var newString = (lastLetter + firstLetter).toUpperCase();
alert(newString);
var splitString = newString.split ("");
var reverseArray = splitString.reverse ();
alert (reverseArray);
var joinArray = reverseArray.join ("");
alert (joinArray);
alert (originalSentence + joinArray);
var originalJoinArray = (originalSentence + joinArray);
var n = (originalJoinArray.length/2);
alert (n)
