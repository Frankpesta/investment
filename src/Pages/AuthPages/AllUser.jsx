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
import { Link, useNavigate } from "react-router-dom";
// import { Users } from "../../app/services/auth/admin";
// import { ProfileData } from "../../app/services/response";
import { routeObj } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";

export default function AllUsers() {
  const [AllDeposit, setAllDeposits] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isLoading, user } = useSelector((state) => state.Reducers.admin);
  //   console.log(AllDeposit);

  // const handleClick = (e: number | string) => {
  //   navigate(`${routeObj.usersprofit}${e}`);
  // };

  // useEffect(() => {
  //   if (user) {
  //     const codelandcsSt = async () => {
  //       setAllDeposits(user!);
  //     };
  //     codelandcsSt();
  //   }
  // }, [user]);

  // useEffect(() => {
  //   async function init() {
  //     await dispatch(Users());
  //   }
  //   init();
  // }, [dispatch]);

  return (
    <Layout>
      <Box minH="100vh" pb={"150px"} bg="" position="relative" color={"black"}>
        <Flex w={"96%"} m={"auto"} py="50px" flexDirection="column">
          <Flex justify={"space-between"} pb={{ base: "20px", md: "50px" }}>
            <Text fontSize={{ base: "25px", md: "30px" }} fontWeight="700">
              All Users
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
                      <Th display={{ base: "none", md: "table-cell" }}>
                        <Flex align={"center"}>Name</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Email</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Country</Flex>
                      </Th>
                      <Th>
                        <Flex align={"center"}>Phone</Flex>
                      </Th>
                    </Tr>
                  </Thead>
                  {AllDeposit && AllDeposit.length !== 0 ? (
                    <Tbody>
                      {AllDeposit?.map((students) => (
                        <Tr
                          // key={students.id}
                          cursor="pointer"
                          // onClick={() => handleClick(students.id)}
                        >
                          <Td
                            mt={""}
                            display={{ base: "none", md: "table-cell" }}
                          >
                            <Link to={`${""}`}>
                              <Text as={"span"} bg="" h={"100%"}>
                                {/* {students.fullname} */}
                              </Text>
                            </Link>
                          </Td>
                          <Td>{/* {students.email} */}</Td>
                          <Td>{/* {students.country} */}</Td>
                          <Td>{/* {students.phone} */}</Td>
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
                  No User Yet
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
