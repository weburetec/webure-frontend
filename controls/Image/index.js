import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ src, ...rest }) => (
  <div>
    <LazyLoadImage effect="blur" src={src} {...rest} loading="lazy" />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
