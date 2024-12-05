export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kirubel Fiseha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Engineer &</span>{" "}
             Payment Specialist
          </h1>
          <p className="hero--section-description">
          Experienced Section Manager specializing in Smart POS Android application development and TOMS monitoring tools, 
          with a proven track record in designing and implementing secure payment systems, 
          
            <br /> and providing expert consultation as a Payment Specialist.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
