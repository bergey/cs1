Here are some reminders of Javascript patterns that we've seen so far.
You don't need to memorize these - that will come through
practice. Refer to this handout when you're wondering, "do I need
parentheses here?" or "do I need a semicolon here?"

## variables

The first time you use a variable, write `var` before the variable name.
After that, you can change the value without writing `var`.

~~~ javascript
var x = 2; // first time
x = 3 // every other time
~~~

## if / else

The simplest if statement has a condition and a body.  The condition needs to be in parentheses.  The body is in curly braces.  The computer only runs the body if the condition is true.

~~~ javascript
if ( x > 2) {
    console.log("That's a big number!");
}
~~~

The else part is optional.  If you write one, it comes after the curly braces of the if, and has its own set of curly braces:

~~~ javascript
if ( x > 2) {
  console.log("That's a big number!");
} else {
  console.log("That's not so big.");
}
~~~

If you have more than two cases you can write `else if` so that exactly one of the curly-brace sections will be run:

~~~ javascript
if ( x > 100) {
    console.log("That's a big number!");
} else if ( x < 0){
    console.log("That's much too small.");
} else {
    console.log("That's not so big.");
}
~~~

## loops

There are many kinds of loops, but for now, all our loops will follow the same 4-part pattern.  The 4 parts of a loop are:

1. A starting value for the loop variable
2. A condition of when to keep running the loop
3. Something to do each time through the loop
4. Change the loop variable, often adding one

~~~ javascript
var i = 0;  // starting value
while ( i < 100 ) { // condition
    console.log(i);  // do something
    i = i + 1;  // next value for i
}
~~~

## Semicolons

Some places you need a semicolon:

1. After assigning a variable (with or without `var`) `x = 3;`
2. After calling a function `$("#stuff".text("Surprise!");`

Sometimes the semicolon can be far away from the reason it's neeeded, like when we define a long function inside a call to `.click`.

And some places you don't need a semicolon:

1. After the condition of an `if` or `while`
2. After the closing brace of an `if` or `while` or `function`

## Parentheses, Braces, Brackets

Programming languages use almost all the symbols on the keyboard.  It helps to have names for them so we can talk about them.  I call them:

- `()` Parentheses, which I usually shorten to 'parens'
- `[]` Square Brackets, or shorter, 'brackets'
- `{}` Curly Braces, or just 'braces'

For any of these, we call the one on the left the "open paren" (or bracket or brace), and the one on the right the "close paren" or "closing paren".

Parentheses are for functions.  We use them when defining the function and when using (calling) the function.  Many functions have inputs in the parens; for functions without inputs, we still need a pair of **empty parens** `()`.

Curly braces are for grouping lines of code.  We use them for if / else statements, loops, and functions.

Square brackets are for lists, and things like lists.  See section [lists][] below.

## Lists

Like lists in HTML, lists in Javascript let us store a bunch of similar things in order.  In javascript, we can give a list a name, and refer to it later by that name, the same way we use named variables for numbers or functions.

The Hangman game has examples of many things we can do with lists:

- writing a **literal** list, where we write all the items at once
- adding one item to a list
- adding two lists together
- writing a loop to look at every item in a list
- checking if an item is in a list

A literal list is written in square brackets, with a comma between each element:

~~~ javascript
listOfNumbers = [1, 2, 7, 1000];
listOfStrings = ["Daniel", "Micah", "Bergey"];
~~~

We can pick out a particular item from a list using the name of the list and the numbered position in the list.  Remember, the numbers start at 0!  Often, instead of a literal number, we will use a variable that refers to a number.  This lets us combine loops and lists, which is very important.

~~~ javascript
listOfNumbers[0];  // 1
listOfNumbers[2];  // 7
listOfNumbers[3]; // 1000
var i = 0;
listOfStrings[i];  // "Daniel
i = 1;
listOfStrings[i];  // Micah
~~~

## Events

Every time we click on an HTML element in the browser, the browser makes an event.  We've already used **jquery** `.click` to tell the browser what function to call after a particular HTML element is clicked.  These functions can also get more information about what HTML element was clicked.  This lets us reuse the same callback function on multiple HTML elements.

The browser calls our function with one input; we have to pick a name by which to refer to the input.

- I like to call it `ev`, short for *event*. We're only interested in one thing about this event - which HTML element was clicked.
- If the event is called `ev`, this information is called `ev.target`.
- **JQuery** can look up this *target* the same way it would an ID or class.
- Once we've looked it up with JQuery, we can get more information about it, like its text or its id.
- In particular, the `.text` and `.attr` methods can be used to write text and attributes, and also to read them.

Try this code out in your browser to see the different steps.  You'll need to add some (clickable) HTML with the ID "a" also.

``` javascript
$("#a").click(function (ev) {
  console.log(ev);
  console.log(ev.target");
  var a = $(ev.target);
  console.log( a );
  console.log( a.text() );
  console.log( a.attr("id") );
});
```
