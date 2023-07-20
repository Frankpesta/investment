import Layout from "../../layouts/Layout";
import {
  Box,
  Flex,
  Text,
  Icon,
  Input,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { GiMoneyStack, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import {
  // reset,
  usersProfit,
  PostWithdraw,
} from "../../app/services/auth/depositSlice";
import { useCustomToast } from "../../utils/toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function UsersProfit() {
  const [AllDeposit, setAllDeposits] = useState([]);
  const dispatch = useDispatch();
  const { withdraw } = useSelector((state) => state.depositReducer);
  const [student, setStudent] = useState();
  const [active, setActive] = useState();
  const [complete, setComplete] = useState();
  const [current, setCurrent] = useState();
  const { notifyError, notifySuccess } = useCustomToast();
  const { code } = useParams();
  const navigate = useNavigate();

  // console.log(AllDeposit);

  // const [id, setId] = useState<string>();

  useEffect(() => {
    if (withdraw) {
      // const vv = localStorage.getItem("userInfo");
      // if (vv) {
      //   const gg = JSON.parse(vv);
      //   const id = gg.user.id;
      // }

      const codelandcsSt = async () => {
        setAllDeposits(withdraw.data);
      };
      codelandcsSt();
    }
  }, [withdraw]);

  useEffect(() => {
    async function init() {
      await dispatch(usersProfit(code)).then((result) => {
        // console.log(result);

        if (result.meta.requestStatus === "rejected") {
          notifyError(result.payload);
        }
      });
    }
    init();
  }, [dispatch]);

  useEffect(() => {
    if (withdraw) {
      setStudent(withdraw.total.depositsTot);
      setActive(withdraw.total.profitTot);
      setComplete(withdraw.total.withdrawalTot);
      setCurrent(withdraw.total.current);
    }
  }, [withdraw]);
  const Info = [
    {
      icon: GiPayMoney,
      title: "Total Deposits",
      data: student ? student : 0,
    },
    {
      icon: GiMoneyStack,
      title: "Total Profit",
      data: active ? active : 0,
    },
    {
      icon: GiTakeMyMoney,
      title: "Current Profit",
      data: current ? current : 0,
    },
    {
      icon: GiTakeMyMoney,
      title: "Total Withdrawals",
      data: complete ? complete : 0,
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
          <Text
            ml={{ base: "10px", md: "30px" }}
            mb={{ base: "20px", md: "0" }}
            cursor="pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </Text>
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
                w={{ base: "90%", md: "20%" }}
                bg={"#ffffff"}
                minH={"120px"}
                mt={{ base: "20px", md: "0" }}
                borderRadius="5px"
                justify={"center"}
                align="center"
                flexDirection={"row"}
                gap="30px"
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
                Withdrawal Form
              </Text>
              <Flex
                // align={"center"}
                justify="space-around"
                p={"10px"}
                bg="whiteAlpha.700"
                w={{ base: "30%", md: "10%" }}
              >
                {/* */}
              </Flex>
            </Flex>
            <Flex
              bg={""}
              w="100%"
              pt={"30px"}
              pb="100px"
              flexDirection={"column"}
              // overflowX="scroll"
            >
              <Flex
                minH={"500px"}
                w={{ base: "100%", md: "100%" }}
                flexDir="column"
                // bg={"green"}
                // border="1px solid teal"
              >
                {AllDeposit && AllDeposit.length !== 0 ? (
                  <>
                    {AllDeposit?.map((item) => (
                      <Flex
                        w={{ base: "100%", md: "90%" }}
                        mx="auto"
                        bg={""}
                        boxShadow="xl"
                        // border={"1px solid teal"}
                        h="300px"
                        mt={"20px"}
                        py="20px"
                        flexDir="column"
                        justify={"space-around"}
                        key={item.id}
                      >
                        <Flex
                          justify={{ base: "center", md: "space-around" }}
                          align="center"
                        >
                          <Text
                            py={"15px"}
                            px={{ base: "30px", md: "30px" }}
                            border={"1px solid teal"}
                            // ml={{ base: "10px", md: "0" }}
                          >
                            <b>Plan</b> <br /> {item.plan}
                          </Text>
                          <Text
                            py={"15px"}
                            px="30px"
                            border={"1px solid teal"}
                            // ml={{ base: "10px", md: "0" }}
                          >
                            <b>Amount</b> <br /> ${item.amount}
                          </Text>
                          <Text py={"15px"} px="30px" border={"1px solid teal"}>
                            <b>Profit</b> <br /> ${item.profit}
                          </Text>
                        </Flex>
                        <Flex align="" bg={""}>
                          <Formik
                            initialValues={{ withdrawal_req: 0 }}
                            onSubmit={async (values, { resetForm }) => {
                              let withdrawId = { withdrawId: item.id };
                              let withdrawal_user = {
                                withdrawal_user: item.userId,
                              };
                              const body = {
                                ...values,
                                ...withdrawId,
                                ...withdrawal_user,
                              };
                              // console.log(body);

                              dispatch(PostWithdraw(body)).then(
                                async (result) => {
                                  if (
                                    result.meta.requestStatus === "fulfilled"
                                  ) {
                                    notifySuccess(result.payload);
                                    resetForm({
                                      values: { withdrawal_req: 0 },
                                    });
                                    await dispatch(usersProfit(code));
                                  }

                                  if (
                                    result.meta.requestStatus === "rejected"
                                  ) {
                                    notifyError(result.payload);
                                    resetForm({
                                      values: { withdrawal_req: 0 },
                                    });
                                  }
                                }
                              );
                            }}
                          >
                            {(prop) => (
                              <form
                                onSubmit={prop.handleSubmit}
                                autoComplete="off"
                                style={{
                                  // backgroundColor: "yellowgreen",
                                  width: "100%",
                                }}
                              >
                                <FormControl
                                  variant="floating"
                                  id="Email"
                                  py={{ base: "17px", md: "15px" }}
                                  px={{ base: "1rem", md: "34px" }}
                                  mx="auto"
                                  mt="30px"
                                  w={{ base: "95%", md: "80%" }}
                                  // bg="red"
                                  // border="1px solid teal"
                                  bg="white"
                                >
                                  <b>Amount:</b>
                                  <Field
                                    as={Input}
                                    placeholder="Amount To Be Withdrawn "
                                    // _focus={{ backgroundColor: "red" }}
                                    _placeholder={{
                                      color: "teal.700",
                                      fontSize: "15px",
                                    }}
                                    fontWeight={"400"}
                                    autoComplete="new-password"
                                    variant={"unstyled"}
                                    name="withdrawal_req"
                                  />
                                </FormControl>
                                {/* <Input _focus=></Input> */}

                                <Flex
                                  justify={"right"}
                                  mx="auto"
                                  w={{ base: "95%", md: "80%" }}
                                >
                                  <Button
                                    bg="teal.700"
                                    mt={{ base: "30px", md: "25px" }}
                                    w={{ base: "100%", md: "130px" }}
                                    h={{ base: "2.2rem", md: "36px" }}
                                    fontSize={{ base: "1rem", md: "18px" }}
                                    py={{ base: "20px", md: "25px" }}
                                    color="white"
                                    type="submit"
                                    _hover={{
                                      bg: "blue.700",
                                      color: "gray.200",
                                    }}
                                    transition="0.6s"
                                    borderRadius={"5px"}
                                  >
                                    Withdraw
                                  </Button>
                                </Flex>
                              </form>
                            )}
                          </Formik>
                        </Flex>
                      </Flex>
                    ))}
                  </>
                ) : (
                  <>
                    <Flex
                      p={"40px"}
                      bg="teal.900"
                      justify={"center"}
                      align="center"
                      mt="20px"
                    >
                      <Text fontSize={"25px"} color="white" fontWeight={"700"}>
                        No Deposit For this User Yet
                      </Text>
                    </Flex>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
