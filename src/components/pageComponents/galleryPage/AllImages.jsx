import React, { useCallback, useEffect, useState } from "react";
import { AllGalleryImages } from "@/utils/Contents/images/all";
import GalleryModal from "./GalleryModal";
import Gallery from "react-photo-gallery";
import ImageGallery from "react-image-gallery";
import { getGallery } from "@/utils/API";


function AllImages() {
  const [slicedIndex, setSlicedIndex] = useState(32);

  const [galleryModal, setGalleryModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryData, setGalleryData] = useState([]);

  //api

  const fetchGalleryData = useCallback(async () => {
    const response = await getGallery();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setGalleryData(response.data.data[0]);
        console.log(response.data.data[0]);
      }
    }
  }, []);

  useEffect(() => {
    fetchGalleryData();
  }, [fetchGalleryData]);

  const imageData ={
  category: 'Testing',
  width: 4,
  height: 3,
  }
 
  // const transformedData=[]
  // galleryData.images.forEach((gallery)=>{
  //   transformedData.push({
  //     original: gallery.path
  //   })
  // })

  // console.log(transformedData,"tejkdffffffffffffffffffffffffffff")

// {
//   original: "/assets/images/gallery/all/2.jpg",
//   category: 'Testing',
//   width: 4,
//   height: 3,
// },

  

  return (
    <div>
      {/* <div className='gallery_grid'>
        {AllGalleryImages.length > 0 &&
          AllGalleryImages.slice(0, slicedIndex).map((item, index) => {
            return (
              <div className='gallery_item'>
                <a href={item.path} className='gallery_img'>
                  <img src={item.path} alt='gallery image' />
                </a>
              </div>
            );
          })}
      </div> */}

      <Gallery
        // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
        photos={AllGalleryImages.map(function (item) {
          item.src = item.original;
          return item;
        })}
        margin={4}
        onClick={(event, { index }) => {
          setGalleryModal(true);
          setGalleryIndex(index);
        }}
      />

      {GalleryModal && (
        <GalleryModal
          show={galleryModal}
          onHide={() => setGalleryModal(!galleryModal)}
        >
          <ImageGallery
            // items={filteredImageArray
            items={AllGalleryImages
              // .slice(0, slicedIndex)
              .map(function (item) {
                return item;
              })}
            showFullscreenButton={false}
            showThumbnails={false}
            showPlayButton={false}
            startIndex={galleryIndex}
          />
        </GalleryModal>
      )}

      <div className="text-center">
        {/* <button
          type='button'
          className='load_more_btn'
          onClick={() => {
            setSlicedIndex(slicedIndex + 32);
          }}
        >
          <span>Load more</span>
        </button> */}
      </div>
    </div>
  );
}

export default AllImages;

// import React, { useState } from 'react';
// import { AllGalleryImages } from '@/utils/Contents/images/all';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// function AllImages() {
//   const [slicedIndex, setSlicedIndex] = useState(32);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const openLightbox = (index) => {
//     setCurrentImageIndex(index);
//     setLightboxOpen(true);
//   };

//   const closeLightbox = () => {
//     setLightboxOpen(false);
//   };

//   return (
//     <div>
//       <div className='gallery_grid'>
//         {AllGalleryImages.length > 0 &&
//           AllGalleryImages.slice(0, slicedIndex).map((item, index) => (
//             <div key={index} className='gallery_item'>
//               <div className='gallery_img'>
//                 <img
//                   onClick={() => openLightbox(index)}
//                   src={item.path}
//                   alt='gallery image'
//                   // style={}
//                 />
//               </div>
//             </div>
//           ))}
//       </div>
//       <div className='text-center'>
//         <button
//           type='button'
//           className='load_more_btn'
//           onClick={() => {
//             setSlicedIndex(slicedIndex + 32);
//           }}
//         >
//           <span>Load more</span>
//         </button>
//       </div>
//       {lightboxOpen && (
//         <Lightbox
//           mainSrc={AllGalleryImages[currentImageIndex].path}
//           nextSrc={
//             AllGalleryImages[(currentImageIndex + 1) % AllGalleryImages.length]
//               .path
//           }
//           prevSrc={
//             AllGalleryImages[
//               (currentImageIndex + AllGalleryImages.length - 1) %
//                 AllGalleryImages.length
//             ].path
//           }
//           onCloseRequest={() => closeLightbox()}
//           onMovePrevRequest={() =>
//             setCurrentImageIndex(
//               (currentImageIndex + AllGalleryImages.length - 1) %
//                 AllGalleryImages.length
//             )
//           }
//           onMoveNextRequest={() =>
//             setCurrentImageIndex(
//               (currentImageIndex + 1) % AllGalleryImages.length
//             )
//           }
//         />
//       )}
//     </div>
//   );
// }

// export default AllImages;
