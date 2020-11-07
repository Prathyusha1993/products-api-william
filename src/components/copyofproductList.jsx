import React, {Component} from 'react';
import { fetchProducts, mockFetchProducts } from '../services/productServices';
import {Link} from 'react-router-dom';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: {},
            err: null,
            isLoading: false,
            search:""
        };
    }

    componentDidMount(){
        this.setState({ isLoading : true});
        mockFetchProducts()
        .then((products) => console.log(products));
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

    onChange = (e) => {
        this.setState({ [ e.target.name]: e.target.value });
    };

    render(){
        let { products, err, isLoading } = this.state;
        // if(err){
        //     return <div>{err.message}</div>;
        // }
        // if(isLoading){
        //     return (
        //         <div>
        //             <div>Loading...</div>
        //         </div>
        //     );
        // }
        console.log(products);
        //filteredproducts i sempty so its displaying their no products in list
        //delete input and flitered products and then directly compare with products length to dispaly the images.
    //     let filteredProducts = products.length > 0 ? products.filter((product) => {const regex = new RegExp(this.state.search, "gi");
    // return product.name.match(regex);
    // }) : {} ;
        return (
          <div className="productlist">
            <div className="container">
                console.log("testing");

              {/* <div className="search">
                  <input id="search" name="search" type="text" onChange={this.onChange} className="search" placeholder="Search for products"/>
              </div> */}
              consoel.log("second testing");
              {products.length > 0 ? (
                  <ul>
                      {products.map((product) => 
                      <li className="card" key={product.id}>
                          <div className="card__image" style={{backgroundImage: `url(${product.links})`}}></div>
                          <div className="card__text">
                              <Link className="card__link">{product.name}</Link>
                          </div>
                      </li>)}
                  </ul>
              ) : (
                  <div>No products found</div>
              )}
              {/* {filteredProducts.length > 0 ? (
                  <ul>
                      console.log("3 testing");
                      {filteredProducts.map((product) => 
                      <li className="card" key={product.id}>
                          <div className="card__image" style={{backgroundImage: `url(${product.links})`}}></div>
                          <div className="card__text">
                              <Link className="card__link">{product.name}</Link>
                          </div>
                      </li>)}
                  </ul>
              ) : (
                  <div>No products found</div>
              )} */}

            </div>
          </div>
        );
    }

}

export default ProductList;