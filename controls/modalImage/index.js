import React from "react";
import ModalImage from "react-modal-image";
import PropTypes from "prop-types";

const ImageModal = ({ src, ...rest }) => {
  return (
    <ModalImage
      small={src}
      large={src}
      {...rest}
      style={{
        width: "100%",
        objectFit: "cover",
      }}
      loading="lazy"
      showRotate={true}
      hideDownload={true}
    />
  );
};

export default ImageModal;

ImageModal.prototype = {
  src: PropTypes.string.isRequired,
};
