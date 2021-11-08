import axios from "axios";
import React, { useState, useEffect } from "react";

//Reactstrap components
import {
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from "reactstrap";

function Report_Account(reportedIsVendor, reporter, reported) {
    console.log("The report function has been run!")

    axios.post( 'localhost:5000/reportaccount', {
        isVendor: reportedIsVendor,
        reporterID: reporter,
        reportedID: reported
    })
    .then((res) => {
        const toggle = (isOpen) => {
            isOpen = !isOpen;
        }
        return Output_Popup("Reported", res.body.message, "Okay", toggle, true)
    })

}

function Output_Popup(HeaderMessage, Message, CloseMessage, toggle, Open) {
    return ( 
    <Modal isOpen={Open} toggle={toggle(Open)}>
        <ModalHeader toggle={toggle(Open)}>
            {HeaderMessage}
        </ModalHeader>
        <ModalBody>
            {Message}
        </ModalBody>
        <ModalFooter>
        <Button color="default" onClick={toggle(Open)}>
            {CloseMessage}
        </Button>
    </ModalFooter>
   </Modal>
    );
}

export { Report_Account, Output_Popup }