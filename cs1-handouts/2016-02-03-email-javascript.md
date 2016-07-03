## Goals

Your email website should:

- show an HTML list, with each line summarizing an email from the provided list
- use the CSS from the BMail project to format each list item
- On the left hand side, clicking on one of the tags list should limit the displayed emails to those that have that tag.
- The `input` element and the lens button should limit the displayed emails to those that match your search
- Clicking on an email should display the full text of the email.

## Tips

Look at prior code to remember the exact way to do things.  Especially:

- `student.js` from `dictionaries` project ( Working with dates, emails)
- Hangman project ( Working with lists, loops, jquery append )
- BMail project (HTML, CSS)

### Working With JQuery
- add `script` tags to your HTML to load your JS code and the JQuery library
- copy the JQuery `script` tag from `dictionaries.html`
- Wrap all code that changes the HTML in:
  ```
  $(document).ready( function() {
      // do stuff here
  });
  ```
- Find the `ol` that contains the messages, and give it an id
- use `$('#someID').append("<li> An Email </li>")` to add emails to the HTML
- use `+` to combine variables and HTML tags: `"<em>" + e.sender.name + "</em>"`
- use `$("#anID").val` to get the text of an `input` field
- use `$("#id").html("")` to erase before you `append()`

### Working With Dictionaries

- The emails I've given you include the following tags: canvas, SVG, Path, V2, SVGFonts, graph.
- Use `filterByTag` that you wrote already.  Probably your `filterByTag` is case sensitive.
- Use `filterBySubject` or `filterByBody` for the search box
