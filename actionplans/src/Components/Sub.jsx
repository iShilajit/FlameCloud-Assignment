import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Button,
    Icon,
    Flex,
} from "@chakra-ui/react";
import { MdDragIndicator } from "react-icons/md";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Dialog from './Dialog';
import Option from './Option';

const Sub = ({ sub }) => {
    console.log("sub", sub);
    const [dialog, setdialog] = useState(false);
    return (
        <>
            <Box>
                <Accordion allowMultiple>
                    {sub.map((el) => (
                        <AccordionItem key={el.id} backgroundColor="#FFFFFF">
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            {isExpanded ? (
                                                <MinusIcon fontSize="12px" />
                                            ) : (
                                                <AddIcon fontSize="12px" />
                                            )}
                                            <Box
                                                flex="1"
                                                textAlign="left"
                                                marginLeft={"15px"}
                                                display={"flex"}
                                                alignItems={"center"}
                                            >
                                                <Icon as={MdDragIndicator} />
                                                <Box ml="4px"> {el.subcategory}</Box>
                                            </Box>
                                        </AccordionButton>
                                    </h2>

                                    <Box>
                                        <Option data={el.pointer} />
                                    </Box>
                                    <AccordionPanel pb={5}>



                                        <Flex>
                                            <Button
                                                colorScheme="messenger"
                                                variant="outline"
                                                margin={"0 12px"}
                                                onClick={() => {
                                                    setdialog(true);
                                                }}
                                            >
                                                <AddIcon fontSize="11px" mr={"5px"} />
                                                Add Pointer
                                            </Button>
                                            <Button
                                                colorScheme="messenger"
                                                variant="outline"
                                                margin={"0 10px"}

                                            >
                                                <AddIcon fontSize="12px" mr={"5px"} />
                                                On Hover**
                                            </Button>
                                        </Flex>

                                        <Dialog
                                            isOpen={dialog}
                                            onClose={() => setdialog(false)}
                                            title="Pointer Name"
                                            placeholder={"Name Pointer"}
                                        />
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </>
    )
}

export default Sub