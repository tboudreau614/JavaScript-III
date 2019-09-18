/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding is the default principle that the 'this' keyword will fall under if no other rules apply. Not used as a feature, just a standard default.
* 2. Implicit Binding is the most commonly used rule. It automatically applies the ‘this’ keyword to what’s on the left of the dot when the function is invoked.
* 3. New binding is used to construct a new object with the 'new' keyword, and uses the 'this' keyword to point to it.
* 4. Explicit binding explicitly tells the JavaScript engine to set ’this’ to point to a certain value using call, apply or bind. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName(firstName) {
  console.log(this);
  return firstName;
}
myName("Tristan");

// Principle 2

// code example for Implicit Binding
const aNewObj = {
    greet: 'How are you?',
    speak: function(firstName) {
      console.log(`${this.greet} my name is ${firstName}`);
      //console.log(this);
    }
  };
  aNewObj.speak('Isaiah');

// Principle 3

// code example for New Binding
function DoorMan(speaker) {
    this.greeting = 'Hello, how are you ';
    this.speaker = speaker;
    this.talk = function() {
      console.log(this.greeting + this.speaker);
      //console.log(this);
    };
  }
  
  const newGuy = new DoorMan('Devin');
  newGuy.talk();

// Principle 4

// code example for Explicit Binding
function Pupper() {
    console.log(`This is my dog, ${this.name}! She might bark a lot but she is very ${this.bark}.`);
}

let myDog ={
    name: 'Lyla Bean',
    bark: 'friendly'
}

Pupper.call(myDog);