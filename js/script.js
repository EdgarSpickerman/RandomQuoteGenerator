// JavaScript source code
//variable declarations
var quotes = [
    {
        quote: 'Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly',
        source: 'Neil Gaiman',
        citation: 'Fables and Reflections',
        tags: ['inspiration']
    },
    {
        quote: 'The flower that blooms in adversity is the rarest and most beautiful of all.',
        source: 'Walt Disney Company',
        citation: 'Mulan',
        tags: ['inspiration', 'life']
    },
    {
        quote: 'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.',
        source: 'Maya Angelou',
        tags: ['inspiration']
    },
    {
        quote: 'I was never really insane except upon occasions when my heart was touched.',
        source: 'Edgar Allan Poe',
        tags: ['inspiration']
    },
    {
        quote: 'Pain is temporary. Quitting lasts forever.',
        source: 'Lance Armstrong',
        citation: 'Every Second Counts',
        tags: ['cancer', 'failure', 'inspiration', 'inspirational', 'pain', 'quitting']
    },
    {
        quote: 'It\'s not the load that breaks you down, it\'s the way you carry it.',
        source: 'Lou Holtz',
        tags: ['inspiration', 'motivation']
    },
    {
        quote: 'Understanding is the first step to acceptance, and only with acceptance can there be recovery.',
        source: 'J.K. Rowling',
        citation: 'Harry Potter and the Goblet of Fire',
        tags: ['acceptance', 'inspiration', 'snmart', 'understanding', 'wise']
    },
    {
        quote: 'To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer',
        source: 'Mahatma Gandhi',
        tags: ['inspiration']
    },
    {
        quote: 'It was only a sunny smile, and little it cost in the giving, but like morning light it scattered the night and made the day worth living.',
        source: 'F. Scott Fitzgerald',
        tags: ['inspiration', 'happiness', 'life']
    },
    {
        quote: "Life is too short to waste your time on people who don't respect, appreciate, and value you.",
        source: 'Roy T. Bennett',
        citation: 'The Light in the Heart',
        tags: ['appreciate', 'inspiration', 'inspirational', 'life', 'positive', 'affirmation', 'respect', 'value', 'relationship']
    },
    {
        quote: 'The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can\'t achieve it.',
        source: 'Jordan Belfort',
        tags: ['excuses', 'goal', 'inspiration', 'motivation', 'self-defeat']
    }
]
//displayed arrayed to keep track of whats displayed
var displayed = [];

/**functions**/

//gets a random number from 0 up to upper but not including upper
function getRandom(upper) {
    return Math.floor(upper * Math.random());
}

//gets a random quote and checks to make sure quote displays once before all other quotes show
function getRandomQuote() {
    let quoteIndex = 0;
    //resets the displayed array once all quotes have been displayed
    if (displayed.length === quotes.length) {
        displayed = [];
    }
    //selects a random quote until the quote isnt in the displayed index
    do {
        quoteIndex = getRandom(quotes.length);
    } while (displayed.indexOf(quoteIndex) > -1)

    displayed.push(quoteIndex);
    console.log(quotes[quoteIndex].quote);
    return quotes[quoteIndex];
}

//gets a random rgb color does not return rgb(255,255,255) because thats white and would not display the text.
function randomRGB() {
    let rgbColor = 'rgb(';
    rgbColor += getRandom(255) + ',';
    rgbColor += getRandom(255) + ',';
    rgbColor += getRandom(255) + ')';
    return rgbColor;
}

function printQuote() {

    //randomly changes the body's color to a new rgb color
    document.body.style.backgroundColor = randomRGB();

    //setting up the html output to print to window

    const randomQuote = getRandomQuote();

    let HtmlOutput = `<p class="quote"> ${randomQuote.quote}</p>`;
    HtmlOutput += `<p class="source"> ${randomQuote.source}`;

    // checks to see if citation or date are present, respectivitly, and prints them out if they are.
    if (randomQuote.citation) {
        HtmlOutput += `<span class="citation"> ${randomQuote.citation} </span>`;
    }
    if (randomQuote.date) {
        HtmlOutput += `<span class="year"> ${randomQuote.date} </span>`;
    }

    HtmlOutput += `</p>`;
    document.getElementById('quote-box').innerHTML = HtmlOutput;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//New Quote every 30 seconds
window.setInterval(printQuote, 30000);