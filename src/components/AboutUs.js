import React from "react";
import "./AboutUsStyles.css";
import Value from "./Value/Value";

export default function AboutUs() {
  return (
    <>
      <div className="about-container">
        <h1>Our History</h1>
        <p>
          {" "}
          EmkaTECH Displays is a family owned, TN based company designing and
          manufacturing passenger information systems for the public transport
          industry since 2007. With subsidiary offices in Tunisia plus a second
          production facility in the TN and representatives all over the world,
          EmkaTECH Displays has satisfied customers in over 10 countries
          worldwide. The security is afforded by more than 10 years’ industry
          experience, financial independence and a continuous product
          development program is further assurance of the company’s
          dependability.
        </p>
        <h1>Our Mission</h1>
        <p> mission description</p>
        <h1>Our Vision</h1>
        <p> vision description</p>
      </div>
      <Value title="Our Vision" sousTitle="Vision We Give to You"/>

      <Value title="Our Value" sousTitle="Value We Give to You"/>
    </>
  );
}
