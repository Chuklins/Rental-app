import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

function LastSection() {
  return (
    <footer className="footer-container">
      <div className="support-bar">
        <span className="support-email">
          <p>Email Support</p>
          <h5>
            <a href="#"></a>help@rent&hirenj.com
          </h5>
        </span>

        <span className="support-number">
          <p>Phone Support</p>
          <h5>0700 555 3333, 0900 888 4444</h5>
        </span>
      </div>

      <section className="about-container">
        <div>
          <p className="about-id">About us</p>
          <p className="about-text">
            Why buy when you can rent? Save time, money, and hassle with our
            convenient rental service. Whether you are planning a special event
            tackling a home improvement project, or just need something for a
            temporary use, we have got you covered. Contact us today to learn
            more and experience the convenience of renting with Rent and Hire
            Naija.
          </p>

          <span className="about-logo">
            <FiFacebook className="fb-" />
            &nbsp;&nbsp;
            <FiTwitter className="twitter-" />
            &nbsp;&nbsp;
            <FiInstagram className="insta-" />
          </span>
        </div>

        <section className="footer-component">
          {/* <div className="page-bar"> */}
          <ul className="footer-list">
            <li className="footer-item">
              <span className="page-acc">
                <a className="title-text" href="#">
                  My Account
                </a>
                <a href="#">Login </a>
                <a href="#">Register</a>
              </span>
            </li>

            <li className="footer-item">
              <span className="footer-payment">
                <a className="title-text" href="#">
                  Payment
                </a>
                <a href="#">Wallet</a>
                <a href="#">Verve </a>
                <a href="#">Mastercard </a>
                <a href="#">Visa </a>
              </span>
            </li>

            <li className="footer-item">
              <span className="footer-support">
                <a className="title-text" href="#">
                  Help and Support
                </a>
                <a href="#">Blog </a>
                <a href="#">Reviews </a>
                <a href="#">FAQ </a>
                <a href="#">Feedback </a>
                <a href="#">Contact </a>
              </span>
            </li>

            <li className="footer-item">
              <span className="footer-terms">
                <a className="title-text" href="#">
                  Information
                </a>
                <a href="#">Advertise </a>
                <a href="#">here </a>
                <a href="#">Terms & Conditions </a>
                <a href="#">States </a>
              </span>
            </li>
          </ul>
          {/* </div> */}
        </section>
      </section>
    </footer>
  );
}

export default LastSection;
