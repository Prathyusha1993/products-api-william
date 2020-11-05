import React, {Component} from 'react';
import { fetchProducts } from '../services/productServices';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: {},
            err: null,
            isLoading: false
        };
    }

    componentDidMount(){
        this.setState({ isLoading : true});
        fetchProducts()
        // .then((res) => res.json())
        // .then((products) => console.log(products))
        .then((res) => {
            if(res.status >= 400){
                throw new Error("server responds with error!");
            }
            return res.json();
        })
        .then((products) => {
            this.setState({products, isLoading: false});
        },
        (err) => {
            this.setState({
                err,
                isLoading: false
            });
        });
    }

    render(){

        return(
            <div>

            </div>
        );
    }

}

export default ProductList;