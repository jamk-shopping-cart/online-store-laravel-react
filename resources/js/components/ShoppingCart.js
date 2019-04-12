import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from './Router';

class ShoppingCart extends Component {
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
    if (Object.keys(this.props.cart).length !== 0) {
      // console.log('ShoppingCart: this.props.cart:', this.props.cart);
      return (
        <React.Fragment>
          <Navigation count={this.props.count} />
          <div className="container-full top marginLg">
            <div className="row text-center">
              <div className="col-10 col-md-10 col-lg-8 model text-center mt-2 max-width">Shopping Cart:</div>
              <div className="col-10 col-md-10 col-lg-8 animated fadeIn delay-0.5s max-width">
                {Object.keys(this.props.cart).map(index => (
                  <li key={index}>
                    <div className="border border-dark rounded p-2 mt-3 animated fadeIn delay-0.5s">
                      <i className="fas fa-times fa-2x float-right" />
                      <table>
                        <tbody>
                          <tr>
                            <td rowSpan="2">
                              <img src={this.props.cart[index].item.imgUrl} alt="shoes model" width={120} />
                            </td>
                            <td className="px-3">{this.props.cart[index].item.model}</td>
                            <td>{this.props.cart[index].item.price}</td>
                          </tr>
                          <tr>
                            <td className="px-3">Size: {this.props.cart[index].size}</td>
                            <td>QTY: {this.props.cart[index].count}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div className="row mx-4 my-2 marginLg">
            <div className="col-md-10 col-lg-8 mt-3 animated fadeIn delay-0.5s">
              <span className="total">Total: </span>
              <span className="total float-right">€{this.totalPriceCart(this.props.cart) + this.toDelivery()}</span>
            </div>
            <div className="col-md-10 col-lg-8">
              <hr />
            </div>
            <div className="col-md-10 col-lg-8 animated fadeIn delay-0.5s">
              <span className="feature">Items: </span>
              <span className="feature float-right">€{this.totalPriceCart(this.props.cart)}</span>
              {/* {Object.keys(this.props.cart).map(index => (
              <div key={index}>
                {this.props.cart[index].count * Number(this.props.cart[index].item.price.substring(1))}
                {this.totalPriceItem(this.props.cart[index])}
              </div>
            ))} */}
            </div>
            <div className="col-md-10 col-lg-8 pt-2 animated fadeIn delay-0.5s">
              <span className="feature">Delivery: </span>
              <span className="feature float-right">€10</span>
            </div>
            <div className="col-12 mt-4 text-center animated fadeIn delay-1s">
              {/* <button type="button" className="btn">
                Continue to Pay
              </button> */}
                <Link to="checkout">
                    Continue to Pay
                </Link>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      // console.log('shopping cart is empty');
      return (
        <React.Fragment>
          <Navigation count={this.props.count} />
          <div className="container-full top text-center">Shopping cart is empty now.</div>
        </React.Fragment>
      );
    }
  }
}

export default ShoppingCart;
