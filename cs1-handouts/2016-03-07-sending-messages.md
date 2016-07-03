# Messages Between Computers

You may want to send messages between two copies of your program
running on different machines.  In particular, most of the students
writing *Battleship* implementations will want this.  The main
difficulty is that one copy of your code doesn't know what computer
your opponent is using, and we want this to work for any two
computers.

I've set up a server at `https://fcscs1.herokuapp.com` that everyone in
the class can use.  Each copy of your program can talk to the server,
and this way they can talk to eachother.  This simple system won't
work if two pairs of players try to play two games of *Battleship* at
once, but I think it will be enough for our purposes.

To pass messages this way there are 4 steps:
    - Load the `faye` Javascript library
    - Connect to the server, using your username
    - Listen for new messages
    - Send a message

 Load the Library

To load the library, add this `script` tag to your HTML:
`&lt;script src="https://fcscs1.herokuapp.com/messages/client.js"&gt;&lt</script&gt;`

## Connect to the server

Add these lines early in your Javascript code.  The `client` knows how
to talk to the message server.  We'll use the `channel` variable to
make sure that one student's game doesn't recieve messages from another.

``` Javascript
var client = new Faye.Client('https://fcscs1.herokuapp.com/messages');

var channel = "/dbergey" // PUT YOUR USERNAME HERE
// KEEP THE SLASH
```

## Listen for new messages

The code below refers to the variables you set in the previous
section.  The function describes what to do when you get a new
message, much like the functions for handling button clicks.  This
simple example just prints the message on the Console.

``` Javascript
client.subscribe(channel, function(msg) {
    console.log('received', msg);
});
```

## Send a message

Finally, you are ready to send a message.  Make sure your messages go
to the same channel that you listen to, above.  A message can be
almost anything that you can use as a variable value:
    - a number
    - a string
    - a list
    - a dictionary

`client.publish(channel, 42);`

# Client Identification

Now that you have two copies of the same code communicating, you may
need a way to distinguish the two copies.  For example, the
`subscribe` function above will get messages sent by the local code,
as well as by the other player.

An easy way is to generate a random number when the page loads, and
include that number in every request.  For example:

``` Javascript
var browserID = Math.random();

client.subscribe(channel, function(msg) {
    if (msg.id == browserID) {
        console.log('received ', msg.text, ' from myself.');
    } else {
        console.log('received ', msg.text, ' from someone else.');
    }

    $('button').click(function () {
        client.publish( { id: browserID, text: 42 } );
    });
```

# Persistant Browser Storage

Ordinary Javascript variables only last until the page is closed.  It
is also possible to store JS values in the browser so that they are
kept between page loads, and even when the browser is quit.  Keep in
mind that if you switch to a different computer, it won't have the
same stored values.

The program below shows how to use this `localStorage` feature.  It
starts with an initial set of songs, to use if this is the first time
we've run this program in this browser on this computer.  If there's a
stored song list, it loads that list instead.  When the user adds a
song, the program adds the new song to the list, and saves it.

``` Javascript
var songs =
    [ "Light My Fire"
    , "Let it Rain"
    , "Cure For Pain"
    , "Who's So Scared"
    ]

// put the songs in an HTML ul
var render = function () {
    $('ul').empty();
    var i = 0;
    while ( i < songs.length ) {
        $('ul').append('<li>' + songs[i] + '</li>');
        i++;
    }
};

$(document).ready( function () {
    // get or set localStorage
    var raw = localStorage.getItem('songs');
    if (raw == null ) {
        // first time running on this computer
        localStorage.setItem('songs', JSON.stringify(songs));
    } else {
        // use stored song list instead of initial list
        songs = JSON.parse(raw);
    }

    $('button').click( function () {
        songs.push($('input').val ());
        $('input').val('');
        render();
        localStorage.setItem('songs', JSON.stringify(songs));
    });

    render();
});
```

`localStorage` can only store Strings.  `JSON` is a way of writing
down a JS value as a String.  `JSON.stringify` turns a value (number,
string, list, dictionary) into a JSON string.  `JSON.parse` does the
reverse, turning a JSON string into the appropriate type of value.
