import { CiCalendar } from "react-icons/ci";
import { MdOutlinePerson2 } from "react-icons/md";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Car from "../assets/Car.png";

function SecondSection() {
  return (
    <>
      <section className="main-container">
        <div className="ad-header">
          <h2>Premium Ad</h2>
          <span className="right-side">
            <h2 className="right-side-text">View More </h2>
            <HiOutlineArrowLongRight className="ad-logo" />
          </span>
        </div>

        <section className="ad-container">
          <div className="secondary-container">
            <div className="Secondary-section">
              <span>
                <img src={Car} />
                <p>Alain Class Motors</p>
                <h4>Mercedes-Benz GLE 450</h4>
              </span>

              <span className="desc-bar">
                <div className="desc-menu">
                  <FaMapMarkedAlt className="desc-logo" />
                  <p>Lagos</p>
                </div>
                <div className="curr-menu">
                  <PiCurrencyNgnDuotone />
                  <p>100,000</p>
                </div>
              </span>

              <p className="desc-text">
                A few years ago, Mercedes-Benz phased its existing V6 engines in
                favor of the smoothness of all six cylinders in straight
              </p>

              <span className="bottom-bar">
                <div className="bottom-menu">
                  <MdOutlinePerson2 />
                  <p>Collins22</p>
                </div>
                <div className="cal-logo">
                  <CiCalendar />
                  <p>2 days ago</p>
                </div>
              </span>
            </div>
          </div>

          <div className="secondary-container">
            <div className="Secondary-section">
              <span>
                <img src={Car} />
                <p>Alain Class Motors</p>
                <h4>Mercedes-Benz GLE 450</h4>
              </span>

              <span className="desc-bar">
                <div className="desc-menu">
                  <FaMapMarkedAlt className="desc-logo" />
                  <p>Lagos</p>
                </div>
                <div className="curr-menu">
                  <PiCurrencyNgnDuotone />
                  <p>100,000</p>
                </div>
              </span>

              <p className="desc-text">
                A few years ago, Mercedes-Benz phased its existing V6 engines in
                favor of the smoothness of all six cylinders in straight
              </p>

              <span className="bottom-bar">
                <div className="bottom-menu">
                  <MdOutlinePerson2 />
                  <p>Collins22</p>
                </div>
                <div className="cal-logo">
                  <CiCalendar />
                  <p>2 days ago</p>
                </div>
              </span>
            </div>
          </div>

          <div className="secondary-container">
            <div className="Secondary-section">
              <span>
                <img src={Car} />
                <p>Alain Class Motors</p>
                <h4>Mercedes-Benz GLE 450</h4>
              </span>

              <span className="desc-bar">
                <div className="desc-menu">
                  <FaMapMarkedAlt className="desc-logo" />
                  <p>Lagos</p>
                </div>
                <div className="curr-menu">
                  <PiCurrencyNgnDuotone />
                  <p>100,000</p>
                </div>
              </span>

              <p className="desc-text">
                A few years ago, Mercedes-Benz phased its existing V6 engines in
                favor of the smoothness of all six cylinders in straight
              </p>

              <span className="bottom-bar">
                <div className="bottom-menu">
                  <MdOutlinePerson2 />
                  <p>Collins22</p>
                </div>
                <div className="cal-logo">
                  <CiCalendar />
                  <p>2 days ago</p>
                </div>
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default SecondSection;
