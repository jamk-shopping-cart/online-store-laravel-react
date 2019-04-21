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
                <React.Fragment>
                    <Navigation count={this.props.count} />
                    <div className="container-full top text-center">Thank you {this.state.name}! Your order is complete and will send to your address tomorrow!</div>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <Navigation count={this.props.count} />
                <div className="container-full top text-center" />
                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-header">Please enter your payment details:</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Name:</label>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            autoFocus
                                            value={this.state.name}
                                            onChange={this.onNameChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Address:</label>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            autoComplete="name"
                                            value={this.state.address}
                                            onChange={this.onAddressChange}
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" value="Submit order" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Checkout;
