//Creating a variable in relation to prompt
var name = prompt ("What is your name?");

//Isolating first character of name
var firstChar = name.slice(0,1);

//Making the sliced character capitalised
var upperCaseFirstChar = firstChar.toUpperCase();

//Isolating the rest of the name after the first letter
var restOfName = name.slice(1,name.length);

//Changing rest of name to lower case
restOfName = restOfName.toLowerCase();

//Add the rest of the name to to the capitalised letter
var capitalisedName = upperCaseFirstChar + restOfName;


//Prompt
alert ("Hello " + capitalisedName + "!");
