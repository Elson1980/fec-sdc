import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'bootstrap-4-react';
const EditEvent = () => {
    console.log('trying to render modal')
    const [cardName, setCardName] = useState()
    const [cardDate, setCardDate] = useState()
   
    const updateCard = async(e) => {
        
        
            e.preventDefault()
            try{
            // let editPackage = { event_name: cardName, event_date: cardDate } ;
            // console.log(editPackage)
            let response = await fetch(`http://localhost:3001/`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify()
            });
            window.location ='/'
    
            }catch(err){
    
            }
        }
       

    

  return (
    <div>
    {/* Button trigger Modal */}
    <Button secondary data-toggle="modal" data-target="#exampleModal">Write a Review</Button>

    {/* Modal */}
    <Modal id="exampleModal" fade>
      <Modal.Dialog>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.Close>
              <span aria-hidden="true">&times;</span>
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            Modal body text goes here.
          </Modal.Body>
          <Modal.Footer>
            <Button secondary data-dismiss="modal">Close</Button>
            <Button primary>Submit</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Dialog>
    </Modal>
  </div>
  );
};
export default EditEvent;
