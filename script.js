const quotes = [
  {
    quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    author: "Albus Dumbledore"
  },
  {
    quote: "It is impossible to manufacture or imitate love",
    author: "Horace Slughorn"
  },
  {
    quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
    author: "Luna Lovegood"
  },
  {
    quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    author: "Sirius Black"
  },
  {
    quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
    author: "Arthur Weasley"
  },
  {
    quote: "Every human life is worth the same, and worth saving.",
    author: "Kingsley Shacklebolt"
  },
  {
    quote: "Have a biscuit, Potter.",
    author: "Minerva McGonagall"
  },
  {
    quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    author: "Albus Dumbledore"
  },
  {
    quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
    author: "Dobby"
  }
];

function generateQuote() {
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = "– " + quotes[arrayIndex].author;
  document.getElementById("generate").addEventListener('click', generateQuote);
  getRandomEmoji();
  randombg()
}


function randombg() {

  var random = Math.floor(Math.random() * 6);

  var bigSize = ["url('./wp1.jpg')",
    "url('./wp2.jpg')",
    "url('./wp3.jpg')",
    "url('./wp4.jpg')",
    "url('./wp5.jpg')",
    "url('./wp6.jpg')",
    "url('./wp7.jpg')"];
  document.body.style.backgroundImage = bigSize[random];
}


function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
                    hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formattedDateTime = now.toLocaleDateString('en-US', options);

  const datetimeElement = document.getElementById('datetime');
  datetimeElement.textContent = formattedDateTime;
}

// Update the date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);



function getRandomEmoji() {
  const emojis = ['😀', '😄', '😆', '😎', '🥳', '🤩', '😊', '🥰', '😇', '🙂'];
  let emoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("generate").textContent = emoji + emoji + " Generate a quote " + emoji + emoji;
}
getRandomEmoji()