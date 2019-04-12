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

    handleSubmit () {
        const paymentDetails = {name: 'test'};
        this.props.callback(paymentDetails);
    }

    render() {
        return (
            <React.Fragment>
                <Navigation count={this.props.count} />
                <div className="container-full top text-center">Shopping cart is empty now.</div>
                <span className="total float-right">Your shopping cart price: €{this.totalPriceCart(this.props.cart)}</span>
                <span className="total float-right">Delivery price: €{this.toDelivery()}</span>
                <span className="total float-right">Total: €{this.totalPriceCart(this.props.cart) + this.toDelivery()}</span>
                <p>Please enter your payment details:</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <p> Credit card number: <input type="text" /></p>
                    <p> Address: <input type="text" /></p>
                    <button type="submit">Submit order!</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Checkout;
