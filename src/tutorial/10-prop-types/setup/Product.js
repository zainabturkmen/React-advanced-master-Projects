import React from 'react';
import PropTypes from "prop-types"

const Product = ({image,name, price }) => {

  return <article className='product'>
    <h4>Single products</h4>
    
  </article>;
};

Product.PropTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

Product.defaultProps = 

export default Product;
