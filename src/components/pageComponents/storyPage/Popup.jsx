import Image from "next/image";
import React from "react";
import image from "../../../../public/assets/images/popup/Independence.jpg";
import { GrClose } from "react-icons/gr";
import { MdClose } from "react-icons/md";

function Popup({ showPopUp, setShowPopUp }) {
  // const handleClick = () =>{
  //   setShowPopUp(!showPopUp)
  // }

  return (
    <div
      className={`d-flex align-items-center justify-content-center ${
        showPopUp ? "modal" : "show-modal"
      }  `}
      onClick={() => setShowPopUp(!showPopUp)}
    >
      <div className="position-relative ">
        <Image
          src={image}
          alt="independence-image"
          className="shadow popup-image"
          style={{ border: "8px solid #FFFAF0" }}
        />
        <div
          className=" position-absolute z-3 p-1 shadow  "
          style={{
            top: "20px",
            right: "20px",
            borderRadius: "50%",
            backgroundColor: "#FFFAF0",
            cursor: "pointer",
          }}
        >
          <MdClose
            className="close-button"
            style={{
              width: "24px",
              height: "24px",
              fontWeight: "900",
              color: "#DC143C",
            }}
            onClick={() => setShowPopUp(!showPopUp)}
          />
        </div>
      </div>
    </div>
  );
}

export default Popup;
