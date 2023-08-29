import React from "react";
import productImg1 from "../assets/SORETRAKP5OUTDOOR2.jpeg";
import productImg2 from "../assets/sonotrak p5 indoor.jpeg";
import productImg3 from "../assets/SORETRASP5OUTDOOR.jpeg";
import productImg4 from "../assets/SORETRAS BUS.jpeg";
import productImg5 from "../assets/SRTM p5 indoor.jpeg";
import productImg6 from "../assets/SRTM.jpeg";
import productImg7 from "../assets/SORETRAKP5OUTDOOR2.jpeg";
import productImg8 from "../assets/sonotrak p5 indoor.jpeg";
import productImg9 from "../assets/SORETRASP5OUTDOOR.jpeg";
import productImg10 from "../assets/SORETRAS BUS.jpeg";
import productImg11 from "../assets/SRTM p5 indoor.jpeg";
import productImg12 from "../assets/SRTM.jpeg";

import "./ProductStyles.css";
import ProductData from "./ProductData";
export default function Products() {
  return (
    <div className="product">
      <h1>
        {" "}
        EMATECH DISPLAYS ARE THE MARKET LEADERS FOR PASSENGER DISPLAY SYSTEMS
      </h1>
      <p>
        EmkaTECH designs and manufactures passenger information systems for the
        public transport industry. Satisfied customers in over 80 countries
        worldwide use a range of EmkaTECH products, attracted by high levels of
        quality, reliability and customer service. The security afforded by 35
        years’ experience, financial independence and a continuous product
        development programme is further assurance of the company’s
        dependability.
      </p>

      <ProductData
        className="first-des"
        heading="ANCILLARY PRODUCTS"
        text="EmkaTECH  also offer Automated Passenger Counting systems to assist you in accurate data to ensure the on-board safety of your passengers as well as the driver and Audio Loop as assisted listening technology."
        img1={productImg1}
        img2={productImg2}
      />
      <ProductData
        heading="LED DESTINATION DISPLAYS"
        className="first-des-reverse"
        text="EmkaTECH has the most extensive range of different sign sizes of any passenger information sign supplier in the public transport market. EmkaTECH’s customer-focused approach means that we can quickly develop and supply new sign sizes to suit specific customer requirements. EmkaTECH’s in-house production and quality assurance is unrivalled in the market and we offer longer warranty terms than all other suppliers as standard for all our LED signs.

        EmkaTECH signs are robust, easy to install, use and maintain. All signs benefit from excellent legibility in all conditions. All signs are fitted with automatic brightness adjustment which optimises visibility and reduces power consumption. The sign system is programmed using EmkaTECH’s proprietary, Windows based software (HELEN) which is simple to use and allows messages to be displayed in multiple languages and a wide variety of fonts and customisable options.
        
        The sign system is driven by a dedicated controller which also serves as the driver interface. EmkaTECH manufactures monochrome, curved, colour route number and full colour signs to cover all customer options."
        img1={productImg3}
        img2={productImg4}
      />
      <ProductData
        className="first-des"
        heading="PASSENGER INFORMATION SYSTEMS"
        text="It is important to be able to inform passengers on-board a vehicle of their current position along the route. Providing “This Stop” and “Next Stop” information helps to ensure that passengers know where they are at all times, so that they do not miss their stop and makes their journeys stress-free."
        img1={productImg5}
        img2={productImg6}
      />
      <ProductData
        className="first-des-reverse"
        heading="STATIC / WAYSIDE DISPLAYS"
        text="To complement EmkaTECH’s on-board products, static information displays are available for applications such as bus stop signs to provide reliable real time information.

        Our static displays are purpose-built to provide clearer transport communication wherever used. From bus stops to airport lounges, real-time travel information is shown in graphically pleasing LEDs
        that ensure passengers are never at a loss."
        img1={productImg7}
        img2={productImg8}
      />
      <ProductData
        className="first-des"
        heading="SOFTWARE SOLUTIONS"
        text="HELEN is a user friendly Windows-based PC programme which allows the creation of message databases for display on EmkaTECH’s Destination Displays. Message databases will typically include the route numbers and route destinations covered by a bus operator. Additional messages such as stop (or “via”) points, advertising, promotional and information messages can also be programmed.


        "
        img1={productImg9}
        img2={productImg10}
      />
      <ProductData
        className="first-des-reverse"
        heading="RAIL SYSTEM"
        text="Providing you with a complete solution, EmkaTECH can also offer products for Rail and Metro. All of the products for this sector comply to the EN50155 and EN45545 certification."
        img1={productImg11}
        img2={productImg12}
      />
    </div>
  );
}
