import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
// import ModalDialog from 'react-bootstrap/ModalDialog';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button'


function SkillDetails() {
      const [smShow, setSmShow] = useState(false);
      const [lgShow, setLgShow] = useState(false);
    
      return (
        <>
          <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
          <Button onClick={() => setLgShow(true)}>Large modal</Button>
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Small Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
          </Modal>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Large Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
          </Modal>
        </>
      );
}

export default SkillDetails