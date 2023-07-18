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
  Button,
} from "@chakra-ui/react";
import Layout from "../../layouts/Layout";
import { Link } from "react-router-dom";
// import { Request, ApproveReq } from "../../app/services/auth/admin";
import { FormattedTime } from "../../utils/moment";
import { useCustomToast } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";

export default function AllRequests() {
  const { notifyError, notifySuccess } = useCustomToast();
  const [AllDeposit, setAllDeposits] = useState([]);
  const dispatch = useDispatch();
  // const { isLoading, request } = useSelector(
  //   (state) => state.Reducers.admin
  // );

  // useEffect(() => {
  //   if (request) {
  //     const codelandcsSt = async () => {
  //       setAllDeposits(request!);
  //     };
  //     codelandcsSt();
  //   }
  // }, [request]);

  // useEffect(() => {
  //   async function init() {
  //     await dispatch(Request());
  //   }
  //   init();
  // }, [dispatch]);

  // async function handleClick(e: { id: string }) {
  //   try {
  //     await dispatch(ApproveReq(e)).then(async (result) => {
  //       if (result.meta.requestStatus === "fulfilled") {
  //         console.log(result);
  //         notifySuccess(result.payload);

  //         await dispatch(Request());
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
              All Requests
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
                      <Th
                      //  display={{ base: "none", md: "table-cell" }}
                      >
                        <Flex align={"center"}>Name</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Amount</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Status</Flex>
                      </Th>
                      <Th display={{ base: "none", md: "table-cell" }}>
                        <Flex align={"center"}>Date Requested</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Action</Flex>
                      </Th>
                    </Tr>
                  </Thead>
                  {AllDeposit && AllDeposit.length !== 0 ? (
                    <Tbody>
                      {AllDeposit?.map((students) => (
                        <Tr
                          // key={students.id}
                          cursor="pointer"
                        >
                          <Td
                            mt={""}
                            //   display={{ base: "none", md: "table-cell" }}
                          >
                            <Link to={`${""}`}>
                              <Text as={"span"} bg="" h={"100%"}>
                                {/* {students.fullname} */}
                              </Text>
                            </Link>
                          </Td>
                          <Td>{/* {students.profit} */}</Td>
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
                          <Td>
                            <Button
                            // onClick={() => handleClick({ id: students.id })}
                            >
                              Approve
                            </Button>
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
                  No Request For Withdrawal Made Yet
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
