import React, { Component } from 'react';
import Navigation from './Navigation';
import ItemList from './ItemList';

class Collection extends Component {
  render() {
    // console.log('Collection: this.props.callback' + typeof this.props.callback, this.props);
    return (
      <React.Fragment>
        <Navigation count={this.props.count} />
        <div id="collection" className="container-full text-center top">
          <div className="animated pulse mb-2">2018 Collection</div>
          <ItemList callback={this.props.callback} />
        </div>
      </React.Fragment>
    );
  }
}

export default Collection;
