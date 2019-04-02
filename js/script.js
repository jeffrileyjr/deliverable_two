var question1 = 'Is the event casual, semi-formal, or formal?';
var question2 = 'What is the current temperature?';
var eventType = prompt(question1);
var tempFahr = prompt(question2);

var string1;
var string2;

if (eventType === 'casual') {
  string1 = `Since it is ${tempFahr} degrees and you are going to a casual event, you should wear something comfy and `;
} else if (eventType === 'semi-casual') {
  string1 = `Since it is ${tempFahr} degrees and you are going to a semi-casual event, you should wear a polo and `;
} else {
  string1 = `Since it is ${tempFahr} degrees and you are going to a formal event, you should wear a suit and `;
}
if (tempFahr < 54) {
  string2 = 'a coat.';
} else if (tempFahr <=70) {
  string2 = 'a jacket.';
} else {
  string2 = 'no jacket.';
}

var result = string1.concat(string2);

console.log(result);
alert(result);