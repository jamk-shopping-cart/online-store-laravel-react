import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './Router';

const Item = ({ item, callback }) => {
  // console.log(item);
  return (
    <div className="container d-flex animated fadeIn delay-1s" onClick={callback.bind(this, item)}>
      <div className="row w-100 ml-auto mr-auto">
        <p className="model col-12 col-lg-3">{item.model}</p>
        <Link className="col-12 col-lg-3" to="iteminfo">
          <img className="imgWidth" src={item.imgUrl} alt="shoes model" />
        </Link>
        <p className="price col-12 col-lg-2">€{item.price}</p>
        <div className="col-12 col-lg-10">
          <hr />
        </div>
      </div>
    </div>
  );
};

Item.data = {
  data: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
};

export default Item;
