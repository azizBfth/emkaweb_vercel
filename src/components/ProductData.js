import { Component } from "react";
import './ProductStyles.css'
import productImg1 from "../assets/9.jpg";

import productImg2 from "../assets/10.jpg";
class ProductData extends Component{

    render(){
        return(

            <div className={this.props.className}>
            <div className="des-text">
              <h2> {this.props.heading}</h2>
              <p>
                {this.props.text}
              </p>
            </div>
            <div className="image">
            <img alt="img" src={this.props.img1} />
    
                <img alt="img" src={this.props.img2} />
            </div>
          </div>
        )
    }
}
export default ProductData;