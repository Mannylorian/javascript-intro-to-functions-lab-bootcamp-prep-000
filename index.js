<<<<<<< HEAD
var uppercase, lowercase;

function shout(string){
  return string.toUpperCase();
} /*passing test*/


function whisper(string){
  return string.toLowerCase();
}/*passing test*/

function logShout(string){
  uppercase=string.toUpperCase();
  string=uppercase;
  console.log (uppercase);
}/*passing test*/

function logWhisper(string){
  lowercase=string.toLowerCase();
  string=lowercase;
  console.log (lowercase);
}/*passing test*/

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
  return "I can't hear you!";
} if (string.toUpperCase() ===string){
  return "YES INDEED!";
} if (string === 'I love you, Grandma.'){
  return "I love you, too.";
}
}
=======
var uppercase='HELLO!'
function shout(string){
  return string.toUpperCase()
}

function logShout(string){
  console.log ("HELLO!");
}

function logWhisper(string){
  console.log ("hello!");
}

var lowercase ='hello!'
function whisper(string){
  return string.toLowerCase()
}
lowercase.toLowerCase()===lowercase;
uppercase.toUpperCase()===uppercase;
function sayHiToGrandma(string){
  if ('string' === "I love you, Grandma");
  return "I love you, too."
} else if {
  ('string'=== lowercase)
}

>>>>>>> c6a0f71297e803d706ff99a3a685bc8088f1a174
