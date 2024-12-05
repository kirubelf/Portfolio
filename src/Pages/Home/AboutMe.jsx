export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I have successfully led development teams, optimized payment solutions, 
          and provided strategic consultation to enhance transaction efficiency and security.
          </p>
          <p className="hero--section-description">
          Passionate about innovation in the fintech sector, 
          I thrive on tackling complex challenges and delivering innovative solutions that drive business success.
          </p>
        </div>
        <br></br><br></br>
        <div>
        <a href="/CV Kirubel Fiseha.pdf" download="/CV Kirubel Fiseha.pdf" style={{ textDecoration: 'none' }} // Removes underline from the link
>
          <button className="btn btn-github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 4H8C6.89543 4 6 4.89543 6 6V26C6 27.1046 6.89543 28 8 28H24C25.1046 28 26 27.1046 26 26V6C26 4.89543 25.1046 4 24 4ZM24 26H8V6H24V26ZM16 7L12 12H14V17H10V14H8L12 9L16 7Z"
                fill="currentColor"
              />
            </svg>
            Download My CV 
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}
