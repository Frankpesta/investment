import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Layout from "../../layouts/Layout";
import { GiPayMoney, GiTakeMyMoney, GiMoneyStack } from "react-icons/gi";
import { AiFillProfile } from "react-icons/ai";
// import { AdminDashboard } from "../../app/services/auth/profileSlice";
// import MarqueeComp from "../../Component/Marquee";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

export default function Home2() {
  const [AllDeposit, setAllDeposits] = useState();
  // const { admin } = useSelector((state) => state.Reducers.profile);
  const dispatch = useDispatch();
  const date = new Date();
  const Today = moment(date).format("MMMM Do YYYY, h:mm:ss a");

  // useEffect(() => {
  //   if (admin) {
  //     const codelandcsSt = async () => {
  //       setAllDeposits(admin!);
  //     };
  //     codelandcsSt();
  //   }
  // }, [admin]);

  // useEffect(() => {
  //   function init() {
  //     dispatch(AdminDashboard());
  //   }
  //   init();
  // }, [dispatch]);

  const Info = [
    {
      icon: GiPayMoney,
      title: "Total Deposits",
      data: "0",
    },
    {
      icon: GiMoneyStack,
      title: "Total Withdrawals",
      data: "0",
    },
    {
      icon: GiTakeMyMoney,
      title: "Total Earning",
      data: "0",
    },
    {
      icon: AiFillProfile,
      title: "Total Referrals",
      data: "0",
    },
  ];

  return (
    <Layout>
      <Box color={"black"}>
        <Flex
          w={"96%"}
          m={"auto"}
          minH="100vh"
          pt="60px"
          pb="60px"
          flexDirection="column"
        >
          <Box w={{ base: "90%", md: "100%" }} m={"auto"}>
            <Text fontSize={{ base: "20px", md: "20px" }} fontWeight="700">
              Overview
            </Text>
            <Text>{Today}</Text>
          </Box>
          <Flex
            justify="space-between"
            align="center"
            pt="30px"
            // bg={"red"}
            pb={{ base: "50px", md: "0" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            {Info?.map((item, index) => (
              <Flex
                key={index}
                w={{ base: "90%", md: "23%" }}
                bg={"#ffffff"}
                minH={"120px"}
                mt={{ base: "20px", md: "0" }}
                borderRadius="5px"
                justify={"center"}
                align="center"
                flexDirection={"row"}
                gap="10px"
              >
                <Flex w={"30%"} justify="right">
                  {" "}
                  <Icon fontSize={"40px"} color="teal.700" as={item.icon} />
                </Flex>

                <Flex w={"60%"} justify="space-between" direction={"column"}>
                  <Text w={"100%"} bg="">
                    {item.title}
                  </Text>
                  <Text fontWeight={"700"} fontSize="20px">
                    {item.data}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Flex py={"10px"} bg="teal.700" mt="30px" overflowX="hidden">
            {/* <MarqueeComp /> */}
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            pt="50px"
            // display={{ base: "none", md: "flex" }}
            // bg={"red"}
            flexDirection="column"
          >
            <Flex
              justify={"space-between"}
              bg=""
              m={"auto"}
              w={{ base: "90%", md: "100%" }}
              align="center"
            >
              <Text fontSize={{ base: "20px", md: "20px" }} fontWeight="700">
                Trading View
              </Text>
              <Flex
                align={"center"}
                justify="space-around"
                p={"10px"}
                bg="whiteAlpha.700"
                w={{ base: "30%", md: "10%" }}
              >
                {/* */}
              </Flex>
            </Flex>
            <Flex
              // bg={"red"}
              w="100%"
              pt={"30px"}
              pb="100px"
              flexDirection={"column"}
              overflowX="scroll"
            >
              <Flex
                h={"500px"}
                w={{ base: "1000px", md: "100%" }}
                bg={""}
                border="1px solid teal"
              >
                {/* <TradingViewWidget /> */}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
