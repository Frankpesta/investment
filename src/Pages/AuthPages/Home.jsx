import Layout from "../../layouts/Layout";
import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
// import TradingViewWidget from "../../Component/Trading";
import { GiPayMoney, GiTakeMyMoney, GiMoneyStack } from "react-icons/gi";
import { AiFillProfile } from "react-icons/ai";
import { routeObj } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Home() {
  const [AllDeposit, setAllDeposits] = useState();
  //   const { customer } = useAppSelector((state) => state.Reducers.profile);
  const navigate = useNavigate();

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
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (customer) {
  //     const codelandcsSt = async () => {
  //       setAllDeposits(customer!);
  //     };
  //     codelandcsSt();
  //   }
  // }, [customer]);

  // useEffect(() => {
  //   async function init() {
  //     await dispatch(UserDashboard());
  //   }
  //   init();
  // }, [dispatch]);

  useEffect(() => {
    const vv = localStorage.getItem("userInfo");
    if (vv) {
      const gg = JSON.parse(vv);
      const id = gg.user.type;
      if (id === "ADMIN") {
        navigate(routeObj.home2);
      }
    }
  }, []);

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
            <Text>Tuesday, 5th of February 2023</Text>
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
