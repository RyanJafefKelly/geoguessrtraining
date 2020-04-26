import React, { useState } from 'react'
import QuizForm from './QuizForm';
// import { Alert, Badge, Button, Card, CardBody, CardHeader, Col, Modal, ModalHeader, Row, Table, ModalBody, ModalFooter } from 'reactstrap';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    //   width: 1000
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

export default function Profile() {
    const [modal, setModal] = useState(false);
    const classes = useStyles();

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
            <Modal 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modal} 
                onClose={() => setModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
                > 
                <Fade in={modal}>
                    <div className={classes.paper}> 
                    <QuizForm />
                    </div>
                </Fade>
            </Modal>
            <Button color="primary" onClick={toggle}>Add Quiz</Button>     
        </div>
    )
}
