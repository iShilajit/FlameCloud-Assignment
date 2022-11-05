import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Icon,
  } from "@chakra-ui/react";
  import { MdDragIndicator } from "react-icons/md";
import Sub from './Sub';
const Cat = ({props}) => {
    console.log(props);
  return (
   <>
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        {props.map((el) => {
          return (
            <AccordionItem key={el.id} backgroundColor={"rgb(241,245,249)"}>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    display={"flex"}
                    alignItems="center"
                  >
                   <Icon as={MdDragIndicator} />
                    <Box ml="4px"> {el.category}</Box>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#FFFFFF">
                <Sub
                  key={el.id}
                  sub={el.cat}
                 
                />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
   </>
  )
}

export default Cat