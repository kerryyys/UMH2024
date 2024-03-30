import React from "react";
import NavBar from "../components/NavBar";
import "../pages-css/ContactUs.css";

function ContactUs() {
  return (
    <div id="contactUs">
      <NavBar />
      <div className="CU">
        <div className="formCU">
          <span>Contact Us</span>
          <p>Feel free to contact us at any time.</p>
          <p>We will get back to you soon.</p>
          <form>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Leave us a message"
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="infoCU">
          <div className="contact">
            <h2>Info</h2>
            <div className="email">
              <div></div>shariahmetric@gmail.com
            </div>
            <div className="phone">
              <div></div>+60-453 2183
            </div>
            <div className="address">
              <div></div>23, Jalan Komputer, KL
            </div>
            <div className="workhour">
              <div></div>09:00 - 18:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
