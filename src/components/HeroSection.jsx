import BackgroundPic from "../assets/BackgroundPic.png";

function HeroSection() {
  return (
    <section className="main-section">
      <div>
        <img src={BackgroundPic} />
      </div>
      <h2>Rent and Hire</h2>
      <h4>Search thousands of classifed all in one places</h4>

      <div>
        <button placeholder="what are you looking for?" className="button-menu">
          <button className="button-search">search</button>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
