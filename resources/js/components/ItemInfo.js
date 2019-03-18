import React, { Component } from 'react';
import { Link } from './Router';
import Navigation from './Navigation';
import DropList from './DropList';

class ItemInfo extends Component {
  handleClick() {
    // console.log(`handleClick this.size=${this.size}`);
    this.props.callback(this.props.item, this.size);
  }

  setSize(size) {
    this.size = size;
  }

  render() {
    // console.log('ItemInfo: this.props.item:', this.props.item, this.props);
    if (!this.props.item) {
      return (
        <React.Fragment>
          <Navigation />
          <div className="container-full text-center top">
            <Link to="collection">
              <i className="fas fa-2x fa-arrow-left" />
            </Link>
            <div className="mt-2">Please select an Item from the Collection</div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Navigation count={this.props.count} />
          <div className="container-full row top mx-auto max-width">
            <div id="collection" className="col-12 text-center">
              <div className="model text-center">{this.props.item.model}</div>
              <div className="animated fadeIn delay-0.5s text-center">
                <img className="imgWidth" src={this.props.item.imgUrl} alt="shoes model" />
              </div>
            </div>
            <div className="col-12 row ml-2">
              <span className="col-1 col-lg-3 model priceMargin">{this.props.item.price}</span>
              <DropList setSize={this.setSize.bind(this)} />
              <i
                className="fas fa-2x fa-cart-plus rounded-circle ml-3 p-3 addIcon"
                onClick={this.handleClick.bind(this)}
              />
              <button className="addBtn" onClick={this.handleClick.bind(this)}>
                Add to cart
              </button>
            </div>
            <div className="mt-3 mx-5 marginLg col-10 col-md-10 col-lg-8">
              <div>
                <p className="feature text-left mb-0">Product information:</p>
              </div>
              <div>{this.props.item.description}</div>
              <div>
                <span className="feature">Color: </span>
                <span className="description">{this.props.item.color}</span>
              </div>
              <div>
                <span className="feature">Material: </span>
                <span className="description">{this.props.item.material}</span>
              </div>
              <div>
                <span className="feature">Closure method: </span>
                <span className="description">{this.props.item.closure_method}</span>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ItemInfo;
