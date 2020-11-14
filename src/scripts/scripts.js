import "../styles/styles.css";
let container = document.getElementsByClassName("container")[0];
console.log(container);
let message = [
  "Hello there!",
  "My name is Sean.",
  "Looks like you found my github page.",
  "Feel free to browse my profile",
  "Here",
  "And see what kind of stuff I've been working on.",
];
let count = 0;
let letterIndex;
let displayText;
function readNextSentence() {
  letterIndex = 0;
  displayText = [];
  if (count < message.length) {
    readLetters();
  } else {
    count = 0;
  }
}
function readLetters(cb) {
  if (letterIndex <= message[count].length) {
    //do something
    container.innerText = message[count].substring(0, letterIndex);
    letterIndex++;
    setTimeout(() => {
      readLetters();
    }, 70);
  } else {
    nextSentence();
  }
}
function nextSentence() {
  count++;
  setTimeout(() => {
    readNextSentence();
  }, 700);
}
readNextSentence();
/**
 * an array of sentences
 * for each sentence
 * display first letter of sentence
 * disply each letter at an interval until sentence length is reached]
 * when sentence length is reached move to the next sentence and repeat
 * when las sentence is complete, repeat the entire process
 */
