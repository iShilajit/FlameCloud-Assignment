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

const ManageDialog = ({ title, onClose, handleCreate, isDelete, isOpen, placeholder, }) => {
    const [data, setdata] = useState("");
    const handleChange = (event) => setdata(event.target.data);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent mx={"8px"}>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            mt={"5px"}
                            data={data}
                            onChange={handleChange}
                            placeholder={placeholder}
                        />
                        <Input
                            mt={"5px"}
                            data={data}
                            onChange={handleChange}
                            placeholder={placeholder}
                        />
                        <Input
                            mt={"5px"}
                            data={data}
                            onChange={handleChange}
                            placeholder={placeholder}
                        />
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
                            colorScheme="blue"
                            
                            mr={3}
                            onClick={onClose}
                        >
                            Update
                        </Button>
                       
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ManageDialog