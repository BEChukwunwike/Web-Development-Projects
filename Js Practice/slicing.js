let myName= prompt("what is your name");
alert("hi " + myName);
let tweet= prompt("type your tweet here.");
alert("You have used " + (tweet.length) + " characters. " + (140-tweet.length) + " characters to go.")
tweetLen = tweet.slice(0,140);
alert(tweetLen);