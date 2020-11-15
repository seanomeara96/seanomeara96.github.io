import "../styles/styles.css";
let container = document.getElementsByClassName("container")[0];
console.log(container);
let message = [
  "Hello there!",
  "My name is Seán.",
  "Looks like you found my github page.",
  "Feel free to browse my profile",
  "<a href='https://github.com/seanomeara96'>Here</a>",
  "And see what kind of stuff I've been working on.",
];
let count = 0;
let letterIndex;
let displayText;
function readSentence() {
  letterIndex = 0;
  displayText = [];
  if (count < message.length) {
    if (count != 4) {
      readLetters();
    } else {
      container.innerHTML = message[count];
      setTimeout(() => {
        nextSentence();
      }, 700);
    }
  } else {
    count = 0;
    readLetters();
  }
}
function readLetters() {
  if (letterIndex <= message[count].length) {
    //do something
    container.innerHTML = message[count].substring(0, letterIndex);
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
    readSentence();
  }, 700);
}
readSentence();
/**
 * an array of sentences
 * for each sentence
 * display first letter of sentence
 * disply each letter at an interval until sentence length is reached]
 * when sentence length is reached move to the next sentence and repeat
 * when las sentence is complete, repeat the entire process
 */
