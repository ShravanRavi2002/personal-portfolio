import * as React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Link,
  VStack,
  IconButton,
  Divider,
  Fade
} from "@chakra-ui/react";
import { css } from "@emotion/core";
import siteConfig from "./site-config";
import profilePic from "../../assets/profile_pic_1.png"
import { motion } from "framer-motion";
import pushpin from "../../assets/pushpin.png"

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const MainScreen = () => {
  return (
    <VStack spacing={5}>
      <motion.div >
      <img src={pushpin} style={{width: "2.5rem", height: "3rem", padding: 0, marginLeft: "auto", marginRight: "auto", paddingBottom: "1rem"}}></img>
        <Box boxShadow={"xl"}  borderRadius="full">
          <Avatar
            // _groupHover={{ width: "5rem", height: '5rem' }}
            size={"xl"}
            src={profilePic}
          />
        </Box>
      </motion.div>
      <Heading
        fontSize={"xl"}
        fontFamily={"body"}
        textTransform="capitalize"
        color="black"
        noOfLines={2}
      >
        Shravan Ravi
      </Heading>
      <Text
        color={"gray.500"}
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        // _groupHover={{ display: "none" }}
        display="block"
      >
        Full-Stack Developer
      </Text>
      {/* <Fade in>
      <Text
        color={"gray.500"}
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: "block" }}
        display="none"
      >
        Full Stack Developer
      </Text>
      </Fade> */}
      <Divider />
      <Flex alignItems="center" justify="center" w="100%">
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              css={css`
              &:hover {
                 color: ${sc.base};
               }
           `}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              size="lg"
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </VStack>
  );
};

export default MainScreen;