import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box,
  Spacer,
  Button,
  Heading,
} from '@chakra-ui/react'
import { MdPeopleOutline } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import axios from 'axios';
import Cat from './Cat';
import Dialog from './Dialog';
import ManageDialog from './ManageDialog';
const ActionPlan = () => {
  const [data, setData] = useState([]);
  const [dialog, setdialog] = useState(false);
  const [mdialog, setmdialog] = useState(false);
  const fetchData = () => {
    axios.get('https://flamecloud-actions.herokuapp.com/api/actions', {
      // axios.get('http://localhost:8080/actions', {
      method: 'GET',

    }).then((r) => {
      setData(r.data)
    })
    console.log(data)
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      {/* main Container */}
      <Box
        mt={"10"}
        p={"3"}
      >
        <Heading
          size='sm'
          align={"left"}
          fontWeight={"normal"}
        >SOP</Heading>
        {/* Flex start */}
        <Flex minWidth='max-content'
          alignItems='center'
          flexDirection={{ base: "row", md: "row" }}
          gap='2'
          justifyContent={"space-between"}
          mb={"20"}>
          <Box p='2'>
            <Heading size='md'>Action Plans</Heading>
          </Box>
          <Spacer />

          <Button
            leftIcon={<MdPeopleOutline />}
            colorScheme='messenger'
            fontSize={"11"}
            w={"28"}
            variant='outline'
            onClick={() => {
              setmdialog(true)
            }}>
            Manage Access
          </Button>
          <Button
            leftIcon={<FaPlusSquare />}
            colorScheme='messenger'
            fontSize={"11"}
            w={"20"}
            variant='solid'
            onClick={() => {
              setdialog(true)
            }}>
            NewPlan
          </Button>

        </Flex>
        {/* Flex end */}
        <Cat props={data} />
        <Dialog
          isOpen={dialog}
          onClose={() => setdialog(false)}

          title="Plan Name"
          placeholder={"Name Your Pan"}
        />

        <ManageDialog
          isOpen={mdialog}
          onClose={() => setmdialog(false)}

          title="SOP Access"
          placeholder={"Select Members"}
        />
      </Box>
    </>
  )
}

export default ActionPlan