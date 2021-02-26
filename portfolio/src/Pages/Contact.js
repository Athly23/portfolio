import React, { Component } from "react";
import "../Pages/Contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScTA8rEueOo4bLF0sfRs49zph_uOcJROwt4Dsu_rSSoxLKHQw/viewform?embedded=true"
            width="640"
            height="852"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </>
    );
  }
}

export default Contact;
