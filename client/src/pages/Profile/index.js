import React, { useState } from 'react'
import QuizForm from './QuizForm';
// import { Alert, Badge, Button, Card, CardBody, CardHeader, Col, Modal, ModalHeader, Row, Table, ModalBody, ModalFooter } from 'reactstrap';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

export default function Profile() {
    const [modal, setModal] = useState(false);
    // const [success, setSuccess] =useState(false);
    // const [data, setData] = useState({
    //   title: null, description: null, startDate: null, endDate: null,
    //   grades: null, house: null, points: null, challengeType: null
    // });
    const toggle = () => setModal(!modal);
  
    const handleSubmit = () => {
        toggle();
        // setSuccess(true);
        // console.log(success);
        // console.log(data);
      }
      const handleCancel = () => {
        toggle();
        // setData({
        //   title: null, description: null, startDate: null, endDate: null,
        //   grades: null, house: null, points: null, challengeType: null
        // });
      }
    return (
        <div>
            <Modal open={modal} onClose={() => setModal(false)}> 
                <QuizForm />
            </Modal>
            <Button color="primary" onClick={toggle}>Add Quiz</Button>     
        </div>
    )
}
