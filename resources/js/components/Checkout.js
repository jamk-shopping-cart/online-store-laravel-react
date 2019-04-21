import React, { Component } from 'react';
import Navigation from './Navigation';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', address: '' };
        this.onNameChange = this.onNameChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

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

    onSubmit(event) {
        console.log(`${this.state.name}, ${this.state.address}`);
        event.preventDefault();
        const paymentDetails = { name: `${this.state.name}`, address: `${this.state.address}` };
        this.props.callback(paymentDetails);
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onAddressChange(event) {
        this.setState({ address: event.target.value });
    }

    render() {
        if (!this.props.orderId) {
            return (
                <span>Thank you { this.state.name } for your order!</span>
            );
        }
        return (
            <React.Fragment>
                <Navigation count={this.props.count} />
                <div className="container-full top text-center">Shopping cart is empty now.</div>
                <span className="total float-right">Your shopping cart price: €{this.totalPriceCart(this.props.cart)}</span><br></br>
                <span className="total float-right">Delivery price: €{this.toDelivery()}</span><br></br>
                <span className="total float-right">Total: €{this.totalPriceCart(this.props.cart) + this.toDelivery()}</span><br></br>
                <p>Please enter your payment details:</p>
                <form onSubmit={this.onSubmit}>
                    <p><label> Name: <input type="text" name="name" value={this.state.name}
                        onChange={this.onNameChange} /></label></p>
                    <p><label> Address: <input type="text" name="address" value={this.state.address}
                        onChange={this.onAddressChange} /></label></p>
                    <p><input type="submit" value="Submit order" /></p>
                </form>
            </React.Fragment>
        );
    }
}

export default Checkout;
