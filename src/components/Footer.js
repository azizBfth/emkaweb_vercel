import React from "react";
import "./FooterStyles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>EmkaTECH</h1>
          <p>choose your favourite led display</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/"> changelog</a>
          <a href="/"> status</a>
          <a href="/"> licence</a>
          <a href="/"> all version</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/"> Project</a>
          <a href="/"> GitHub</a>
          <a href="/"> Issues</a>
          <a href="/"> Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/"> Support</a>
          <a href="/"> Troubleshouting</a>
          <a href="/"> Contact Us</a>
          <a href="/"> all version</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/"> Termes of Services</a>
          <a href="/"> Privacy Policy</a>
          <a href="/"> Licence</a>
        </div>
      </div>
    </div>
  );
}
