import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Akash Chandra Baidya</h1>
        <h2>Data Scientist</h2>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <div className="content">
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <img src="akash.JPG" alt="Profile Picture" />
              <p>Passionate data scientist with experience in research and project management. Currently pursuing a Master's
                degree in Data Science at TU Dortmund, with a strong focus on machine learning. Seeking opportunities to apply my
                skills in a challenging work environment.</p>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/akashbaidya" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/AkashBaidya" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="mailto:akashbaidya2@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </section>

        {/* Rest of the sections */}
      </div>

      <footer>
        <p>© 2023 Akash Chandra Baidya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
