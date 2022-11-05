import React, { useState } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon
} from "@chakra-ui/react";
import { MdDragIndicator } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dialog from "./Dialog";
const Option = ({ data }) => {
    console.log("data", data);
    const [dialog, setdialog] = useState(false);
    return (
        <>
            <Box ml="22px">
                {data && data.map((el) => (
                    <Box
                        border={"1px solid #CBD5E1"}
                        backgroundColor={"#F8FAFC"}
                        p="5px"
                        borderRadius={"4px"}
                        display={"flex"}
                        alignItems="center"
                        justifyContent={"space-between"}
                        mb={"8px"}
                    >
                        <Box display={"flex"}>
                            <Icon as={MdDragIndicator} />
                            <Box ml="4px">{el.option}</Box>
                        </Box>
                        <Menu>
                            <MenuButton as={Button}>
                                <Icon as={BsThreeDotsVertical} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                >
                                    Edit SubCategory
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        setdialog(true);
                                    }}
                                >
                                    Delete
                                </MenuItem>
                                <Dialog
                                    isOpen={dialog}
                                    isDelete={true}
                                    onClose={() => setdialog(false)}
                                    title="Delete Category"

                                />
                            </MenuList>
                        </Menu>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Option