import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routeObj } from "../../constants/routes";
import Layout from "../../layouts/Layout";

export default function Deposit() {
  return (
    <Layout>
      <Box color={"black"} pt="50px" pb="150px">
        <Flex
          justify={{ base: "center", md: "space-between" }}
          wrap="wrap"
          align={"center"}
          m="auto"
          //   px={"5px"}
          w={"95%"}
        >
          <Flex
            w={{ base: "95%", md: "31%" }}
            minH="300px"
            bg={"white"}
            boxShadow="2xl"
            flexDir="column"
            mt={{ base: "40px", md: "0" }}
          >
            <Flex h={"200px"} w="100%">
              <Image src="assets/images/plan6.png" w={"100%"} />
            </Flex>
            <Text
              textAlign={"center"}
              py="10px"
              fontWeight={"700"}
              fontSize="20px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
            >
              {" "}
              Regular Plan
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Minimum Amount </b>: $500
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Maximum Amount </b>: $4,999
            </Text>
            <Flex
              justify={"center"}
              align="center"
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <Link to={`${routeObj.depositytpe}${"Regular"}`}>
                <Text
                  p="10px"
                  px={"20px"}
                  bg={"teal.900"}
                  color="white"
                  borderRadius={"5px"}
                  fontWeight={"700"}
                  fontSize="18px"
                  w={"fit-content"}
                  h={"fit-content"}
                >
                  Deposit
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "95%", md: "31%" }}
            minH="300px"
            bg={"white"}
            boxShadow="2xl"
            flexDir="column"
            mt={{ base: "40px", md: "0" }}
          >
            <Flex h={"200px"} w="100%">
              <Image src="assets/images/plan5.png" w={"100%"} />
            </Flex>
            <Text
              textAlign={"center"}
              py="10px"
              fontWeight={"700"}
              fontSize="20px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
            >
              {" "}
              Premium Plan
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Minimum Amount </b>: $5000
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Maximum Amount </b>: $29,999
            </Text>
            <Flex
              justify={"center"}
              align="center"
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <Link to={`${routeObj.depositytpe}${"Premium"}`}>
                <Text
                  p="10px"
                  px={"20px"}
                  bg={"teal.900"}
                  color="white"
                  borderRadius={"5px"}
                  fontWeight={"700"}
                  fontSize="18px"
                  w={"fit-content"}
                  h={"fit-content"}
                >
                  Deposit
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "95%", md: "31%" }}
            minH="300px"
            bg={"white"}
            boxShadow="2xl"
            flexDir="column"
            mt={{ base: "40px", md: "0" }}
          >
            <Flex h={"200px"} w="100%">
              <Image src="assets/images/plan4.png" w={"100%"} />
            </Flex>
            <Text
              textAlign={"center"}
              py="10px"
              fontWeight={"700"}
              fontSize="20px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
            >
              {" "}
              Zenith Plan
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Minimum Amount </b>: $30,000
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Maximum Amount </b>: $49,999
            </Text>
            <Flex
              justify={"center"}
              align="center"
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <Link to={`${routeObj.depositytpe}${"Zenith"}`}>
                <Text
                  p="10px"
                  px={"20px"}
                  bg={"teal.900"}
                  color="white"
                  borderRadius={"5px"}
                  fontWeight={"700"}
                  fontSize="18px"
                  w={"fit-content"}
                  h={"fit-content"}
                >
                  Deposit
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "95%", md: "31%" }}
            minH="300px"
            bg={"white"}
            boxShadow="2xl"
            flexDir="column"
            mt={"40px"}
          >
            <Flex h={"200px"} w="100%">
              <Image src="assets/images/plan3.png" w={"100%"} />
            </Flex>
            <Text
              textAlign={"center"}
              py="10px"
              fontWeight={"700"}
              fontSize="20px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
            >
              {" "}
              Horizon Plan
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Minimum Amount </b>: $50,000
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Maximum Amount </b>: $100,000
            </Text>
            <Flex
              justify={"center"}
              align="center"
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <Link to={`${routeObj.depositytpe}${"Horizon"}`}>
                <Text
                  p="10px"
                  px={"20px"}
                  bg={"teal.900"}
                  color="white"
                  borderRadius={"5px"}
                  fontWeight={"700"}
                  fontSize="18px"
                  w={"fit-content"}
                  h={"fit-content"}
                >
                  Deposit
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "95%", md: "31%" }}
            minH="300px"
            bg={"white"}
            boxShadow="2xl"
            flexDir="column"
            mt={"40px"}
          >
            <Flex h={"200px"} w="100%">
              <Image src="assets/images/plan2.png" w={"100%"} />
            </Flex>
            <Text
              textAlign={"center"}
              py="10px"
              fontWeight={"700"}
              fontSize="20px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
            >
              {" "}
              Retirement Plan
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Minimum Amount </b>: $100,000
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Maximum Amount </b>: $Unlimited
            </Text>
            <Flex
              justify={"center"}
              align="center"
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <Link to={`${routeObj.depositytpe}${"Retirement"}`}>
                <Text
                  p="10px"
                  px={"20px"}
                  bg={"teal.900"}
                  color="white"
                  borderRadius={"5px"}
                  fontWeight={"700"}
                  fontSize="18px"
                  w={"fit-content"}
                  h={"fit-content"}
                >
                  Deposit
                </Text>
              </Link>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "95%", md: "31%" }}
            minH="300px"
            bg={"white"}
            boxShadow="2xl"
            flexDir="column"
            mt={"40px"}
          >
            <Flex h={"200px"} w="100%">
              <Image src="assets/images/plan1.png" w={"100%"} />
            </Flex>
            <Text
              textAlign={"center"}
              py="10px"
              fontWeight={"700"}
              fontSize="20px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
            >
              {" "}
              Contract Plan
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Minimum Amount </b>: $1,000,000
            </Text>
            <Text
              textAlign={"center"}
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <b>Maximum Amount </b>: Unlimited
            </Text>
            <Flex
              justify={"center"}
              align="center"
              py="10px"
              borderTop={"1px solid teal"}
              borderBottom={"1px solid teal"}
              fontSize="18px"
            >
              <Link to={`${routeObj.depositytpe}${"Contract"}`}>
                <Text
                  p="10px"
                  px={"20px"}
                  bg={"teal.900"}
                  color="white"
                  borderRadius={"5px"}
                  fontWeight={"700"}
                  fontSize="18px"
                  w={"fit-content"}
                  h={"fit-content"}
                >
                  Deposit
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
