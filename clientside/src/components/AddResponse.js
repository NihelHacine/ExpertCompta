import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { editforum } from '../redux/forumSlice';


function AddResponse({el}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  
  const questions = useSelector((state)=>state.forum?.forumlist);
  const question = questions?.filter((data)=>data?._id === el?._id);
  console.log(question);
  const [editedresponse,seteditedresponse] = useState({
    applicant_email: el?.applicant_email,
    question:el?.question,
    response:"",
  });

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}  viewBox="0 0 512 512"><path fill='white' d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg>
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une réponse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Label htmlFor="inputPassword5">Email-Client</Form.Label>
      <Form.Control
        type="text"
        placeholder={el?.applicant_email}
      />
      <Form.Label htmlFor="inputPassword5">Question</Form.Label>
      <Form.Control
        type="text"
        placeholder={el?.question}
      />
     <Form.Label htmlFor="inputPassword5">Réponse</Form.Label>
      <Form.Control
        type="text"
        onChange={(e)=>seteditedresponse({...editedresponse, response:e.target.value})}
      />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => 
        {dispatch(editforum({id:el?._id,editedresponse})) 
          handleClose();
          window.location.reload();
          }}
            >
          valider
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AddResponse

