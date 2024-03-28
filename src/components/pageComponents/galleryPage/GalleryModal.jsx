import { Modal } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const GalleryModal = (props) => {
  return (
    <Modal show={props.show} fullscreen={true} onHide={props.onHide}>
      <Modal.Header
        className="border-0 "
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="d-flex w-100">
          {/* <div>
            <p className="fs-17 fw-bolder mt-2 mb-0">{props.title}</p>
          </div> */}
          <div className="ms-auto">
            <button
              type="button"
              className={`btn  border-0 btn-circle shadow-none custom-cursor`}
              onClick={props.onHide}
            >
              {/* <X size={18} /> */}
              <GrClose style={{width:'30px',height:'30px'}}/>
            </button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body
        className="px-20 "
        style={{ backgroundColor: "#FFFFFF",display:'flex',justifyContent:'center',alignItems:'center', objectFit:'cover',overflow:'hidden',maxWidth:'1100px' , height:' 800px',margin:'5px auto' }}
      >
        {props.children}
      </Modal.Body>
    </Modal>
  );
};

export default GalleryModal;
