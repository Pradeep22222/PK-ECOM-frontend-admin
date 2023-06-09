import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "../../pages/system-state/systemSlice";
export const CustomModal = ({title, children}) => {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state.system);
  return (
    <Modal
      show={modalShow}
      onHide={()=>dispatch(setModalShow())}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{ children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => dispatch(setModalShow())}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

