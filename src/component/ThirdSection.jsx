import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Car from "../assets/Car.png";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePerson2 } from "react-icons/md";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import ProfilePic from "../assets/ProfilePic.png";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";

function ThirdSection() {
  return (
    <section className=" latest-main-container">
      <div className=" latest-ad-header">
        <h2> Latest Ad</h2>
        <span className="right-side">
          <h2 className="right-side-text">View More </h2>
          <HiOutlineArrowLongRight className="ad-logo" />
        </span>
      </div>

      <div className="Latest-container">
        <span>
          <img className="latest-img" src={Car} />
        </span>

        <span className="product-desc">
          <p>Alain Class Motors</p>
          <h4>Mercedes-Benz GLE 450</h4>

          <p className="product-text">
            A few years ago, Mercedes-Benz phased its existing V6 engines in
            favor of the smoothness of all six cylinders in straight
          </p>

          <div className="description-bar">
            <span className="bottom-menu">
              <MdOutlinePerson2 className="bottom-logo" />
              <p>Collins22</p>
            </span>

            <span className="desc-menu">
              <FaMapMarkedAlt className="desc-logo" />
              <p>Lagos</p>
            </span>

            <span className="cal-logo">
              <CiCalendar className="calender-logo" />
              <p>2 days ago</p>
            </span>

            <span className="curr-menu">
              <PiCurrencyNgnDuotone className="curr-logo" />
              <p>100,000</p>
            </span>
          </div>
        </span>
      </div>

      <h2 className="review-ad">Reviews</h2>

      <div className="caraousel-container">
        <span className="caraousel-bar">
          <p className="caraousel-text">
            Renting should not break the bank. That is why we offer competitive
            rates and flexible rental periods to suit your budget and schedule.
            Whether you need something for a few hours, a few days, or longer,
            we will work with you to find a rental solution that fits your needs
          </p>

          <img className="Profile-image" src={ProfilePic} />
          <p>Collins Atalor</p>
        </span>
      </div>
      <SlArrowLeftCircle className="btn btn-left" />
      <SlArrowRightCircle className="btn btn-right" />
    </section>
  );
}

export default ThirdSection;
