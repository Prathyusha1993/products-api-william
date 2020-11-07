import React, { Component } from "react";
import { fetchProducts, mockFetchProducts } from "../services/productServices";
import { Link } from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      // err: null,
      // isLoading: false,
      // search:""
    };
  }

//   componentDidMount() {
//     fetch(
//       "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"
//     )
//       .then((res) => res.json())
//       .then((data) => this.setState({ products: data.products }));
//   }

  // componentDidMount(){
  //         // this.setState({ isLoading : true});
  //         fetchProducts()
  //         .then((res) => res.json())
  //         .then((products) => console.log(products))
  // }

  componentDidMount(){
      this.setState({ isLoading : true});
      mockFetchProducts()
      .then((data) => {
        console.log('data.products', data.products);
        this.setState({ products: data.groups })
      });
    //   .then((products) => console.log('mockFetch products', products));
  };

  // componentDidMount(){
  //     this.setState({ isLoading : true});
  //     fetchProducts()
  //     .then((res) => res.json())
  //     .then((products) => console.log(products))
  //     // .then((res) => {
  //     //     if(res.status >= 400) {
  //     //         throw new Error("server responds with error!");
  //     //     }
  //     //     return res.json();
  //     // })
  //     // .then((products) => {
  //     //     this.setState({
  //     //         products,
  //     //         isLoading: false
  //     //     })
  //     // },
  //     // (err) => {
  //     //     this.setState({
  //     //         err,
  //     //         isLoading: false,
  //     //     });
  //     // })
  // };

  render() {
    let { products } = this.state;
    console.log('render products', products);
    return (
      <div className="productlist">
        <div className="container">
          <ul>
            {products.map((product) => (
              <li className="card" key={product.id}>
                <div
                  className="card__image"
                //   style={{ backgroundImage: `url(${product.links})` }}
                //   style={{ backgroundImage: `url(${"https://www.westelm.com/products/doctors-without-borders-face-coverings-set-of-2-d9946/"})` }}
                >
                    <img src={product.links} alt=""/>
                </div>
                <div className="card__text">
                  {/* <Link className="card__link" to={{pathname: product.name}}>{product.name}</Link> */}
                  <a href="{product.name}" className="card__link">{product.name}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
