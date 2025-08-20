import React from 'react';


const categorizedLines = {
  Funny: [
    "Are you Wi-Fi? Because I'm feeling a connection.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
   
"If we were emojis… I'd be 😍 and you'd be 🚩 — but I’d still swipe right.",

"Are you Netflix? Because I could watch you for hours and still have no idea what’s going on.",

"Are you a cat? Because I’m feline a connection.",
"Are you cereal? Because you're looking like a whole snack with emotional baggage.",
"Are you a salad? Because I don’t like you, but I know you’re probably good for me.",
"Are you a traffic light? Because every time I see you, I stop thinking clearly.",
"Is your name ChapStick? Because you’re on my lips, and slightly awkward.",
"Are you a ghost? Because I’ve been haunted by your last text.",
"Do you work in IT? Because whenever you're around, my logic crashes.",
"Are you an alien? Because your vibe is out of this world… and a little suspicious.",
"Are you cake? Because I know you're not good for me, but I still want a bite",
"Are you a bug in my code? Because I can’t stop debugging you.",
"Are you a virus? Because you’ve infected my heart — and possibly my system.",
"Do you play Minecraft? Because I just fell into your blocky world.",
"Are you a dad joke? Because I shouldn’t laugh… but here we are.",
"Are you Bluetooth? Because I feel paired when you're near.",
"Are you a break statement? Because you make me want to exit my loop.",
"Is your name Lag? Because you're making my heart skip frames."


  ],
  Romantic: [
    "I must be a snowflake, because I've fallen for you.",
    "Every time I see you, my heart skips a beat.",
    "Are you the moon? Because even in the dark, you light up my world.",

"Are you a poem? Because every word from you rhymes with love.",

"If kisses were stars, I’d give you the galaxy.",

"Do you have a name, or can I call you mine forever?",

"Are you a wish? Because everything I’ve ever wanted is standing right in front of me.",

"Are you gravity? Because I’m falling for you more every day.",

"Are you my favorite book? Because I want to reread you every night.",

"Do you believe in fate? Because I think we were written in the stars.",

"Are you a candle? Because you light up every part of me.",

"Are you the sunrise? Because my world begins the moment I see you.",

"If I had a rose for every time I thought of you, my garden would never end.",

"Are you a melody? Because my heart sings every time you’re near.",

"Even if the universe rewinds, I’d still choose you every time.",

"Are you time? Because every second with you is a moment I cherish.",

"You must be made of stardust, because you’re nothing short of magical.",

"Are you an angel? Because heaven’s been missing someone.",

"If you were a season, you’d be spring — because you make everything bloom.",

"Can I follow you home? Because my heart just found where it belongs.",
"Are you a spark? Because you set my soul on fire.",
"You’re not just my type — you’re my every heartbeat.",
  ],
  Nerdy: [
    "You must be made of quarks and leptons, because you’re elementary to me.",
    "Are you a JavaScript function? Because you’ve got me in a callback.",
    

"Are you a black hole? Because you just sucked me in.",

"You must be the square root of -1, because you can’t be real.",

"Are you a carbon sample? Because I want to date you.",

"I must be a DNA helicase, because I’m unzipping your genes.",

"Are you Wi-Fi? Because I’m feeling a strong connection.",

"Are you from the periodic table? Because you’re my favorite element.",

"You must be made of copper and tellurium, because you’re Cu-Te.",

"Are you a software update? Because you just made my life better.",

"If I were an enzyme, I’d be DNA polymerase so I could unzip your genes.",

"Are you a 1 or a 0? Because you've got my binary heart racing.",

"Do you have 11 protons? Because you're sodium fine.",

"You must be Google, because you’ve got everything I’m searching for.",

"Are you an algorithm? Because you complete me.",

"Do you believe in parallel universes? Because in every one of them, I’m in love with you.",

"Are you a neural net? Because my heart activates every time I see you.",

"Are you an IDE? Because you auto-complete me.",

"I wish I was your derivative, so I could lie tangent to your curves.",

"You're like a 3D printer, because you make my dreams real.",

"Are you a stack? Because I’m pushing all my love to you.",

"Are you an exception? Because you just broke my code.",

"Are you light? Because you make my life brighter and faster.",

"Are you a quantum bit? Because you exist in every state I want.",

"Are you Pi? Because you're irrationally attractive.",

"You're like Newton's First Law — you keep my heart in motion.",
  ],
  Cheesy: [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a triangle, you’d be acute one!",
   

"Do you have a map? I just got lost in your eyes.",

"If you were a vegetable, you'd be a cute-cumber.",

"Are you a parking ticket? Because you’ve got FINE written all over you.",

"Are you the cheese to my macaroni? Because we’re better together.",

"Are you an interior decorator? Because when I saw you, the entire room became beautiful.",

"Do you like raisins? How about a date?",

"Are you a campfire? Because you're hot and I want s'more.",

"Are you my phone charger? Because without you, I’d die.",

"Is your name Google? Because you have everything I’ve been searching for.",

"Do you have a Band-Aid? Because I just scraped my knee falling for you.",

"Is your dad a boxer? Because you’re a knockout!",

"Are you the ocean? Because I’m lost at sea.",

"Are you from Tennessee? Because you’re the only ten I see.",

"If beauty were a crime, you’d be serving a life sentence.",

"Do you have sunburn, or are you always this hot?",

"You're like a cloud. When you disappear, it’s a beautiful day.",

"Are you a loan from a bank? Because you have my interest!",

"Can you lend me a kiss? I promise I’ll give it back.",

"Are you made of glue? Because I’m stuck on you.",

"Are you a snowflake? Because you’re one of a kind.",

"Do you have an eraser? Because I can't get you out of my mind.",

"If kisses were snowflakes, I’d send you a blizzard.",
  ]
};

const Library = ({ favorites, setFavorites }) => {
  const handleFavorite = (line) => {
    if (!favorites.includes(line)) {
      setFavorites([...favorites, line]);
      alert("❤️ Added to Favorites!");
    } else {
      alert("Already in favorites!");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-danger fw-bold mb-4">
        <i className="bi bi-book-half me-2"></i>📚 Pick-Up Line Library
      </h2>

      {Object.entries(categorizedLines).map(([category, lines]) => (
        <div key={category} className="mb-5">
          <h4 className="text-primary mb-3">{category} 💬</h4>
          <div className="row">
            {lines.map((line, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 mb-3">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <p className="mb-0 text-dark">{line}</p>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleFavorite(line)}
                    >
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Library;
