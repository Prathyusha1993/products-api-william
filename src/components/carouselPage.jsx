import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { mockFetchProducts } from "../services/productServices";
//import DetailsPage from "./detailsPage";

class CarouselPage extends Component {
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
        <img src={prod.hero.href} alt={prod.id} />
        <p className="image__name"> {prod.name} </p>
      </div>
    ));
  };

  render() {
    let { product } = this.state;
    console.log("carousel products", product);
    return (
      <div className="carousel-wrapper">
        <Carousel>
          {this.imageList()}
        </Carousel>
      </div>
    );
  }
}

export default CarouselPage;

