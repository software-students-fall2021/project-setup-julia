import axios from "axios";
import react from "react";

//Reactstrap components
import {
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from "reactstrap";

const Report_Account = function (reportedIsVendor, reporter, reportee, path) {
    console.log("The report function has been run!")
    axios.post(path, {
        isVendor: reportedIsVendor,
        reporterID: reporter,
        reporteeID: reportee
    })
    .then((res) => {
        const toggle = (isOpen) => {
            isOpen = !isOpen;
        }
        return Output_Popup("Reported", res.message, "Okay", toggle, true)
    })
}

const Output_Popup = function (HeaderMessage, Message, CloseMessage, toggle, Open) {
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
}

export { Report_Account, Output_Popup }