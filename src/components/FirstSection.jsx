import Property from "../assets/Property.png";
import Vehicle from "../assets/Vehicle.png";
import Camera from "../assets/Camera.png";
import Electronics from "../assets/Electronics.png";
import Equipment from "../assets/Equipment.png";
import Fashion from "../assets/Fashion.png";

function FirstSection() {
  return (
    <section className="primary-container">
      <h3>All Categories</h3>
      <div className="primary-section">
        <span className="primary-display">
          <img src={Property} alt="Property" />
          <p> Property</p>
        </span>

        <span>
          <img src={Vehicle} alt="Vehicle" />
          <p>Vehicles</p>
        </span>

        <span>
          <img src={Camera} alt="Camera, Lens/Light" />
          <p>Camera, Lens/Light</p>
        </span>

        <span className="primary-display">
          <img src={Electronics} alt="Electroics & Gadgets" />
          <p>Electroics & Gadgets</p>
        </span>

        <span>
          <img src={Equipment} alt="Heavy Equipment & Machinery" />
          <p>Heavy Equipment & Machinery</p>
        </span>

        <span>
          <img src={Fashion} alt="Fashion" />
          <p>Fashion</p>
        </span>
      </div>
    </section>
  );
}

export default FirstSection;
