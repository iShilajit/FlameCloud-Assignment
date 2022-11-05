import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

const Dialog = ({ title, onClose,handleCreate, isDelete, isOpen, placeholder,}) => {
    const [data, setdata] = useState("");
    const handleChange = (event) => setdata(event.target.data);
    var lorem=`  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
    auctor. Sit amet, consectetur adipiscing consectetur adipiscing
    elit.`
    return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={"8px"}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {lorem}
            {!isDelete && (
              <Input
                mt={"5px"}
                data={data}
                onChange={handleChange}
                placeholder={placeholder}
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              colorScheme="messenger"
             
            >
              {isDelete ? "Delete" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Dialog