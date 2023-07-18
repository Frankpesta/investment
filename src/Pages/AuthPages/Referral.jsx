import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Layout from "../../layouts/Layout";
// import { ReferralCall } from "../../app/services/auth/notification";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormattedTime } from "../../utils/moment";
import { useDispatch, useSelector } from "react-redux";

export default function Referral() {
  const dispatch = useDispatch();
  // const { refrrral } = useSelector((state) => state.Reducers.notify);

  const [AllDeposit, setAllDeposits] = useState([]);
  // console.log(refrrral?.referredBy);

  // useEffect(() => {
  //   if (refrrral) {
  //     const codelandcsSt = async () => {
  //       setAllDeposits(refrrral.referredWho!);
  //     };
  //     codelandcsSt();
  //   }
  // }, [refrrral]);

  // useEffect(() => {
  //   async function init() {
  //     await dispatch(ReferralCall());
  //   }
  //   init();
  // }, [dispatch]);

  return (
    <Layout>
      <Box color={"black"} w="90%" m={"auto"} py="50px" pb="300px">
        <Flex
          h="250px"
          width={{ base: "100%", md: "85%" }}
          bg="teal.900"
          justify={"center"}
          align="center"
          m={"auto"}
        >
          <Flex
            height={"30%"}
            w={{ base: "90%", md: "70%" }}
            boxShadow={"2xl"}
            bg="teal.800"
            color={"white"}
            justify="center"
            align={"center"}
            px={{ base: "10px" }}
            // fontSize="20px"
          >
            <Text fontSize={"14px"}> Referral Link :</Text>
            <Text fontSize={"14px"} ml="5px">
              {"No referral Link"}
              {/* {refrrral ? refrrral.link : "No referral Link"} */}
            </Text>
          </Flex>
        </Flex>
        <Flex
          h="250px"
          width={"100%"}
          bg="teal.900"
          justify={"center"}
          align="center"
          m={"auto"}
          mt="40px"
          color={"white"}
        >
          {/* <Flex
            height={"30%"}
            w={{ base: "90%", md: "70%" }}
            boxShadow={"2xl"}
            bg="teal.800"
            color={"white"}
            justify="center"
            align={"center"}
            style={
              refrrral?.referredBy ? { display: "flex" } : { display: "none" }
            }
          >
            <b>You Were Referred By Albert</b>
          </Flex> */}
          <Flex
            height={"30%"}
            w={{ base: "90%", md: "70%" }}
            px={"10px"}
            boxShadow={"2xl"}
            bg="teal.800"
            color={"white"}
            justify="center"
            align={"center"}
            // style={
            //   refrrral?.referredBy ? { display: "none" } : { display: "flex" }
            // }
            // fontSize="20px"
          >
            <b>You Weren't Referred By Anyone</b>
          </Flex>
        </Flex>

        <TableContainer pt={"40px"}>
          <>
            <Table variant="">
              <Thead bg={"bg.background"} h="60px">
                <Tr>
                  <Th display={{ base: "none", md: "table-cell" }}>
                    <Flex align={"center"}>Referral ID</Flex>
                  </Th>
                  <Th>
                    <Flex align={"center"}>Name</Flex>
                  </Th>

                  <Th>
                    <Flex align={"center"}>Date Withdrawn</Flex>
                  </Th>
                </Tr>
              </Thead>
              {(AllDeposit && AllDeposit.length === 0) || undefined ? (
                <Tbody>
                  {AllDeposit?.map((students) => (
                    <Tr
                      // key={students.id}
                      cursor="pointer"
                    >
                      <Td mt={""}>
                        <Link to={`${""}`}>
                          <Text as={"span"} bg="" h={"100%"}>
                            {/* {students.id} */}
                          </Text>
                        </Link>
                      </Td>
                      <Td>{/* {students.current} */}</Td>
                      <Td>
                        <Flex align={"center"}>
                          <Text
                            w={{ base: "90%", md: "60%" }}
                            py={"5px"}
                            px={"10px"}
                            textAlign="center"
                            fontSize={{ base: "15px", md: "15px" }}
                          >
                            {/* {FormattedTime(students.withdrawalTot!)} */}
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
              AllDeposit?.length !== 0
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <Text fontSize={"25px"} color="white" fontWeight={"700"}>
              No Referrals From You Yet
            </Text>
          </Flex>
        </TableContainer>
      </Box>
    </Layout>
  );
}
