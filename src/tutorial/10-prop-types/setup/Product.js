import React from 'react';
import PropTypes from "prop-types"
import defaultImage from "../../../assets/default-image.jpeg"

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

Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: 
}

export default Product;
