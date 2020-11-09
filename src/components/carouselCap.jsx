import React, { Component } from "react";
import  Carousel from "react-bootstrap/Carousel";
import { mockFetchProducts } from "../services/productServices";
//import DetailsPage from "./detailsPage";

class CarouselCap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    // this.setState({ isLoading : true});
    mockFetchProducts().then((data) => {
      console.log("data.products", data.groups);
      this.setState({ product: data.groups });
    });
  }

  imageList = () => {
    return this.state.product.map((prod) => (
      <div>
        <img src={prod.hero.href} alt={prod.id} className="d-block w-100" />
      </div>
    ));
  };

  imageCaption = () => {
      return this.state.product.map((prod) => (
          <div>
          <h3>{prod.name}</h3>
          {/* <p>{prod.price}</p> */}
          </div>
      ));
  };

  render(){
      return(
          <div>
              <Carousel>
                  <Carousel.Item>
                      {this.imageList()}
                      <Carousel.Caption>
                        {this.imageCaption()}
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
          </div>
      );
  }

}

export default CarouselCap;