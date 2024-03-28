// // components/Lightbox.js
// import React, { useState } from 'react';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// const LightBoxComponent = ({ images, isOpen, onClose, index }) => {
//   return (
//     <>
//       {isOpen && (
//         <Lightbox
//           mainSrc={images[index].path}
//           nextSrc={images[(index + 1) % images.length].path}
//           prevSrc={images[(index + images.length - 1) % images.length].path}
//           onCloseRequest={onClose}
//           onMovePrevRequest={() =>
//             onClose((index + images.length - 1) % images.length)
//           }
//           onMoveNextRequest={() => onClose((index + 1) % images.length)}
//         />
//       )}
//     </>
//   );
// };

// export default LightBoxComponent;
