import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #ffdde1, #ee9ca7)',
      }}
    >
      <div className="container">
        <div
          className="card shadow-lg p-5 border-0 rounded-4 mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 192, 203, 0.3)',
            boxShadow: '0 12px 24px rgba(255, 105, 180, 0.2)',
            maxWidth: '850px',
            transition: 'transform 0.3s ease',
          }}
        >
          <div className="text-center">
            <div className="card" data-aos="fade-up">
              <h2
                className="text-danger fw-bold mb-4"
                style={{ fontSize: '2.5rem' }}
              >
                <i className="bi bi-heart-fill me-2"></i>About This App
              </h2>

              <p
                className="lead mb-3 text-dark"
                style={{ fontSize: '1.2rem' }}
              >
                💬 <strong>Flirty & Fun</strong> – AI crafts cheeky, charming
                pick-up lines just for you.
                <br />
                😍 <strong>Rate & Favorite</strong> – React with emojis and save
                the ones that win your heart.
                <br />
                📚 <strong>Library</strong> – Explore collections of funny,
                romantic, nerdy, and cheesy lines.
                <br />
                🌍 <strong>Community</strong> – Share laughs, vote on the best
                lines, and connect with others.
                <br />
                📣 <strong>Feedback Welcome</strong> – We love hearing what you
                think!
              </p>

              <p
                className="text-muted fst-italic mt-4"
                style={{ fontSize: '1rem' }}
              >
                Made with ❤️ to make you laugh, smile, and maybe fall in love
                with tech a little more...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
