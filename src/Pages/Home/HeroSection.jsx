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
          Division Manager at Moti Engineering PLC with extensive experience in leading teams and managing high-impact fintech projects, ensuring operational excellence and delivering secure, innovative financial solutions. 
          
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
