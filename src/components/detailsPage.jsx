import React, {Component} from 'react';
import {Carousel} from 'react-responsive-caraousel';

class DetailsPage extends Component {
    state={
        products:[],
    };

    componentDidMount(){
        this.setState({ isLoading : true});
        mockFetchProducts()
        .then((data) => {
          console.log('data.products', data.products);
          this.setState({ products: data.groups })
        });
      //   .then((products) => console.log('mockFetch products', products));
    };
    render(){
        return(
            <Carousel>
                <div>
                    <img src={} alt=""/>
                </div>
            </Carousel>
        );
    }
}

export default DetailsPage;