import React, { Component } from 'react';
import Navigation from './Navigation';

class Checkout extends Component {
    totalPriceItem(id) {
        return id.count * id.item.price;
    }

    totalPriceCart(cart) {
        return Object.keys(cart).reduce((acc, id) => acc + this.totalPriceItem(cart[id]), 0);
    }

    toDelivery() {
        const delivery = 10;
        return delivery;
    }

    render() {
        return (
            <React.Fragment>
                <Navigation count={this.props.count} />
                <div className="container-full top text-center">Shopping cart is empty now.</div>
            </React.Fragment>
        );
    }
}

export default Checkout;
