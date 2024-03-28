import { getRoomFacilities } from "@/utils/API";
import React, { useCallback, useEffect, useState } from "react";

function RoomFacilities() {
  const [data, setData] = useState([]);

  const fetchGalleryData = useCallback(async () => {
    const response = await getRoomFacilities();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data.data, "service data");
      }
    }
  }, []);

  useEffect(() => {
    fetchGalleryData();
  }, [fetchGalleryData]);

  return (
    <div className="luxurious_wrapper">
      <div className="header_area text-center mx-auto pb-4">
        <h2 className="story_title yellow-color-c2">
          IN-ROOM SERVICES & AMENITIES
        </h2>

        <div className="shape2">
          <img
            src="assets/images/shape/experience_shape.png"
            alt="place shape"
          />
        </div>
      </div>
      <div className="room-facilities pt-4 ">
        <div className="row">
          {data &&
            data.map((service) => {
              return (
                <div className="col-md-3 ">
                  <h4 className="ps-3">{service.title}</h4>

                  <ul className="facilities-list">
                    {service.services.map((desc) => {
                      return(
                        <li>{desc} </li>)
                    })}
                  </ul>
                </div>
              );
            })}
          {/* <div className='col-md-3 '>
            <h4 className='ps-3'>BED & BATH</h4>
            <ul className='facilities-list'>
              <li>Posturepedic mattresses &amp; Italian bed linen </li>

              <li>Softer beds &amp; hard boards on request</li>
              <li>Pillow menu</li>
              <li>Nature Essentials bath amenities</li>
              <li>Makeup mirror, hair dryer &amp; scale</li>
              <li>Plush bathrobes &amp; slippers</li>
              <li>Suit, skirt &amp; padded hangers on request</li>
              <li>
                Rollaway or Extra Beds are available on additional charge on a
                per night basis
              </li>
              <li>
                Infant cribs for infants aged 0-2 years available on request on
                complimentary basis
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h4 className='ps-3'>INTERNET ACCESS</h4>
            <ul className='facilities-list'>
              <li>Complimentary basic Wi-Fi</li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h4 className='ps-3'>ROOM FEATURES</h4>
            <ul className='facilities-list'>
              <li>Living room, bedroom &amp; bathroom</li>
              <li>Tea-coffee maker</li>
              <li>Yoga kit on request</li>
              <li>Well-stocked minibar</li>
              <li>Electronic safe</li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h4 className='ps-3'>SERVICES & AMENITIES</h4>
            <ul className='facilities-list'>
              <li>Choice of smoking &amp; non-smoking rooms</li>
              <li>Daily housekeeping &amp; turndown service</li>
              <li>Complimentary newspapers</li>
              <li>24-hour in-room dining</li>
              <li>Laundry and express laundry service</li>
              <li>Iron &amp; ironing board on request</li>
              <li>24-hour on-call doctor &amp; nurse</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default RoomFacilities;
