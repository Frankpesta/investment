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
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import Layout from "../../layouts/Layout";
import { Link as RouterLink } from "react-router-dom";
// import { ApproveReq, Deposit } from "../../app/services/auth/admin";
import { FormattedTime } from "../../utils/moment";
import { useCustomToast } from "../../utils/toast";
import { useDispatch } from "react-redux";

export default function AllDeposit() {
  const { notifyError, notifySuccess } = useCustomToast();
  const [AllDeposit, setAllDeposits] = useState([]);
  const dispatch = useDispatch();
  // const { isLoading, deposit } = useDispatch(
  //   (state) => state.Reducers.admin
  // );

  // useEffect(() => {
  //   if (deposit) {
  //     const codelandcsSt = async () => {
  //       setAllDeposits(deposit!);
  //     };
  //     codelandcsSt();
  //   }
  // }, [deposit]);

  // useEffect(() => {
  //   async function init() {
  //     await dispatch(Deposit());
  //   }
  //   init();
  // }, [dispatch]);

  // async function handleClick(e: { id: string }) {
  //   try {
  //     await dispatch(ApproveReq(e)).then(async (result) => {
  //       if (result.meta.requestStatus === "fulfilled") {
  //         console.log(result);
  //         notifySuccess(result.payload);

  //         await dispatch(Deposit());
  //       }
  //       if (result.meta.requestStatus === "rejected") {
  //         notifyError(result.payload);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error as TypeError);
  //   }
  // }

  return (
    <Layout>
      <Box minH="100vh" pb={"150px"} bg="" position="relative" color={"black"}>
        <Flex w={"96%"} m={"auto"} py="50px" flexDirection="column">
          <Flex justify={"space-between"} pb={{ base: "20px", md: "50px" }}>
            <Text fontSize={{ base: "25px", md: "30px" }} fontWeight="700">
              All Deposits
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
          {/* <Skeleton isLoaded={!isLoading}> */}
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
                        <Flex align={"center"}>Depositor</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Amount</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Action</Flex>
                      </Th>
                      <Th display={{ base: "none", md: "table-cell" }}>
                        <Flex align={"center"}>Plan</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Image</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Status</Flex>
                      </Th>
                      <Th>
                        <Flex
                          align={"center"}
                          display={{ base: "none", md: "table-cell" }}
                        >
                          Date of Deposit
                        </Flex>
                      </Th>
                    </Tr>
                  </Thead>
                  {AllDeposit && AllDeposit.length !== 0 ? (
                    <Tbody>
                      {AllDeposit?.map((students) => (
                        <Tr
                          //  key={students.id}
                          cursor="pointer"
                        >
                          <Td mt={""}>
                            <Text as={"span"} bg="" h={"100%"}>
                              {/* {students.fullname} */}
                            </Text>
                          </Td>
                          <Td>{/* ${students.amount} */}</Td>
                          <Td>
                            <Button
                              bg={"#e5e5e5"}
                              // onClick={() =>
                              //   handleClick({ id: students.id! })
                              // }
                            >
                              Approve
                            </Button>
                          </Td>
                          <Td display={{ base: "none", md: "table-cell" }}>
                            {/* {students.plan} */}
                          </Td>
                          <Td>
                            <Link
                              // to={students.image!}
                              as={RouterLink}
                              target="_blank"
                            >
                              <Image
                                // src={students.image!}
                                h="40px"
                                w={"40px"}
                              />
                            </Link>
                          </Td>
                          <Td>{/* {students.status} */}</Td>
                          <Td display={{ base: "none", md: "table-cell" }}>
                            <Flex align={"center"}>
                              <Text
                                w={{ base: "90%", md: "60%" }}
                                py={"5px"}
                                // px={"10px"}
                                textAlign="center"
                                fontSize={{ base: "15px", md: "15px" }}
                              >
                                {/* {FormattedTime(students.created_at!)} */}
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
                  No Deposit Made Yet
                </Text>
              </Flex>
            </TableContainer>
          </Flex>
          {/* </Skeleton> */}
        </Flex>
      </Box>
    </Layout>
  );
}
