import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Skeleton,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Layout from "../../layouts/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Withdraw } from "../../app/services/auth/admin";

export default function AllWithdrawal() {
  const [AllDeposit, setAllDeposits] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, withdraw } = useSelector((state) => state.admin);

  useEffect(() => {
    if (withdraw) {
      const codelandcsSt = async () => {
        setAllDeposits(withdraw);
      };
      codelandcsSt();
    }
  }, [withdraw]);

  useEffect(() => {
    async function init() {
      await dispatch(Withdraw());
    }
    init();
  }, [dispatch]);

  return (
    <Layout>
      <Box minH="100vh" pb={"150px"} bg="" position="relative" color={"black"}>
        <Flex w={"96%"} m={"auto"} py="50px" flexDirection="column">
          <Flex justify={"space-between"} pb={{ base: "20px", md: "50px" }}>
            <Text fontSize={{ base: "25px", md: "30px" }} fontWeight="700">
              All Withdrawals
            </Text>
            <Flex
              display={{ base: "none", md: "flex" }}
              align={"center"}
              justify="space-around"
              p={"10px"}
              bg="whiteAlpha.700"
              w={"15%"}
              mr="30px"
            ></Flex>
            <Flex
              display={{ base: "flex", md: "none" }}
              align={"center"}
              justify="space-around"
              p={"10px"}
              bg="white"
              w={"35%"}
              cursor="pointer"
            ></Flex>
          </Flex>
        </Flex>
        <Flex w={"96%"} m={"auto"} py="0px" flexDirection="column" mb={"50px"}>
          <Skeleton isLoaded={!isLoading}>
            <Flex
              w={"96%"}
              minH="300px"
              m={"auto"}
              py="0px"
              flexDirection="column"
            >
              <TableContainer>
                <>
                  <Table variant="">
                    <Thead bg={"bg.background"} h="60px">
                      <Tr>
                        <Th>
                          <Flex align={"center"}>Withdrawer's Name</Flex>
                        </Th>
                        <Th>
                          <Flex align={"center"}>Current Profit</Flex>
                        </Th>
                        <Th display={{ base: "none", md: "table-cell" }}>
                          <Flex align={"center"}>Amount</Flex>
                        </Th>
                        <Th>
                          <Flex align={"center"}>Plan</Flex>
                        </Th>
                      </Tr>
                    </Thead>
                    {AllDeposit && AllDeposit.length !== 0 ? (
                      <Tbody>
                        {AllDeposit?.map((students) => (
                          <Tr key={students.id} cursor="pointer">
                            <Td mt={""}>
                              <Link to={`${""}`}>
                                <Text as={"span"} bg="" h={"100%"}>
                                  {students.fullname}
                                </Text>
                              </Link>
                            </Td>
                            <Td>${students.profit}</Td>
                            <Td display={{ base: "none", md: "table-cell" }}>
                              ${students.amount}
                            </Td>
                            <Td>
                              <Flex align={"center"}>
                                <Text
                                  w={{ base: "90%", md: "60%" }}
                                  py={"5px"}
                                  // px={"10px"}
                                  textAlign="center"
                                  fontSize={{ base: "15px", md: "15px" }}
                                >
                                  {students.plan}
                                </Text>
                              </Flex>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    ) : (
                      <></>
                    )}
                  </Table>
                </>
                <Flex
                  p={"40px"}
                  bg="teal.900"
                  justify={"center"}
                  align="center"
                  mt="20px"
                  style={
                    AllDeposit?.length === 0
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Text fontSize={"25px"} color="white" fontWeight={"700"}>
                    No Withdrawals Made Yet
                  </Text>
                </Flex>
              </TableContainer>
            </Flex>
          </Skeleton>
        </Flex>
      </Box>
    </Layout>
  );
}
