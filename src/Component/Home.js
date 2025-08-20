import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ favorites, setFavorites }) => {
  const [line, setLine] = useState('');
  const navigate = useNavigate();

  const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Is your name Wi-Fi? Because I'm feeling a strong connection.",
    "Do you have a name, or can I call you mine?",
    "Are you French? Because Eiffel for you.",
    "Do you like Star Wars? Because Yoda one for me.",
    "If you were a vegetable, you’d be a cute-cumber.",
    "Are you Wi-Fi? Because I'm feeling a connection.",
      "If you were a vegetable, you’d be a cute-cumber.",
      "Is your name Google? Because you have everything I’m searching for.",
      "Are you a magician? Because whenever I look at you, everyone else disappears.",
  "Do you have a name, or can I call you mine?",
  "Are you French? Because Eiffel for you.",
  "If you were a vegetable, you’d be a cute-cumber!",
  "Do you believe in love at first sight—or should I walk by again?",
  "Is your name Google? Because you’ve got everything I’m searching for.",
"If you were a cat, you’d purr-fectly fit in my heart.",
"Are you a campfire? Because you’re hot and I want s’more.",
"If beauty were a crime, you’d be serving a life sentence.",
"Are you made of sugar? Because you’re so sweet it’s unreal.",
"Do you like science? Because I've got my ion you.",
"Are you a keyboard? Because you’re just my type.",
"Can I follow you home? Because my parents always told me to follow my dreams.",
"Are you an equation? Because you complete my formula.",
"Do you have a Band-Aid? I just scraped my knee falling for you.",
"If you were a song, you'd be the best track on the album.",
"Are you a charger? Because without you, I'd die.",
"You're so dazzling, even the stars are jealous.",
"Are you a spell? Because you’ve enchanted me.",
"If you were words on a page, you’d be fine print.",
"Are you a sunrise? Because you brighten my day from the start.",
"Do you have sunscreen? Because you just burned me with your smile.",
"Are you a pizza? Because I’d never get tired of you.",
"You must be an artist, because you just drew me in.",
"Are you caffeine? Because you’ve got me all energized.",
"Are you an app? Because I can’t stop clicking with you.",
"If kisses were currency, I’d be a billionaire with you.",
"Are you a light switch? Because you turn me on.",
"Are you summer? Because you’re making me sweat.",
"Do you have a mirror in your pocket? Because I see myself in your pants—oops, heart!",
"Are you a hacker? Because you just cracked my heart.",
"Are you WiFi? Because I’m totally connected.",
"Is your dad a pilot? Because you’re fly as heck.",
"Are you a fire alarm? Because you’re smokin’!",
"You must be made of stardust, because you shine like the cosmos.",
"Are you Netflix? Because I could watch you all day.",
"Are you gravity? Because you’ve got me falling for you.",
"Are you lightning? Because you just struck me.",
"Are you a page-turner? Because I can’t wait to read more about you.",
"Are you French? Because Eiffel for you.",
"If kisses were snowflakes, I’d send you a blizzard.",
"Are you made of copper and tellurium? Because you're Cu-Te.",
"If I could rearrange the alphabet, I’d put U and I together.",
"Are you a magician? Because whenever you're around, everything else disappears.",
"You must be a sunset, because you're lighting up my world.",
"You don’t need keys to drive me crazy.",
"Do you have a name, or can I call you mine?",
"I didn’t believe in love at first sight — until I saw you.",
"Can I follow you home? Because my parents always told me to follow my dreams.",
"Do you like raisins? How do you feel about a date?.",
"Are you a loan from a bank? Because you have my interest!",
"I’m not a photographer, but I can picture us together.",
"Is your name Wi-Fi? Because I'm feeling a strong connection.",
"Are you cake? Because I want a piece of you.",
"If beauty were time, you’d be an eternity.",
"I’m not flirting.I’m just being extra nice to someone who's extra attractive.",
"I hope your day is as nice as your smile — and your DMs are open."



    
  ];

  const generateLine = () => {
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    setLine(pickupLines[randomIndex]);
  };

  const addToFavorites = () => {
    if (line && !favorites.includes(line)) {
      setFavorites([...favorites, line]);
      alert("❤️ Added to Favorites!");
      navigate("/favorites"); // Go to Favorites page
    } else {
      alert("⚠️ Already in favorites or no line generated.");
    }
  };

  return (
    <section className="hero-section text-center" style={{ background: "linear-gradient(135deg, #fceabb, #f17bd0ff)" }}>
      <h1 className="text-danger mb-4">Welcome to AI Pick-Up Line Rater 💘</h1>

      <button className="btn btn-light shadow-sm mb-3" onClick={generateLine}>
        🎲 Generate Line
      </button>

      <p className="h4 fw-bold my-3">{line}</p>

      <button className="btn btn-danger px-4 py-2 fw-semibold" onClick={addToFavorites}>
        ❤️ Add to Favorites
      </button>
    </section>
  );
};

export default Home;
