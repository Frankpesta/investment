import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Box,
  ModalOverlay,
  Text,
  FormControl,
  Input,
  Flex,
  Image,
  FormHelperText,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useState } from "react";
import { useCustomToast } from "../../utils/toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Deposit } from "../../app/services/auth/depositSlice";
// import { Deposit } from "../../app/services/auth/depositSlice";

// type Doingek = {
//   btc: string;
//   ethereum: string;
//   xrp: string;
//   usdt: string;
// };

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
//   network: string;
//   plan: string;
//   data: Doingek;
// };
export default function AddNewUser(props) {
  const [select, setSelected] = useState(null);
  const initialValues = { amount: "" };
  const { notifyError, notifySuccess } = useCustomToast();
  const dispatch = useDispatch();
  // console.log(import.meta.env.VITE_UPLOAD_PRESET);

  // console.log(select);

  return (
    <Modal
      isOpen={props.isOpen}
      size={{ base: "full", md: "2xl" }}
      onClose={props.onClose}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(10deg)"
      />
      <ModalContent>
        <ModalCloseButton color="font.main" />
        <ModalBody padding={0} bg="white">
          <Box
            pt={{ base: "2rem", md: "40px" }}
            pe={{ base: "1rem", md: "20px" }}
            pb={{ base: "20px", md: "38px" }}
            ps={{ base: "1rem", md: "20px" }}
            color="font.dark"
          >
            <Box pt={{ base: "2.5rem", md: "30px" }}>
              <Flex
                h={"100px"}
                bg=""
                align={"center"}
                justify="space-around"
                border={"4px solid #d7d7d7"}
                // flexDir={{ base: "column", md: "row" }}
              >
                <Flex
                  height={{ base: "80%", md: "80%" }}
                  w={{ base: "30%", md: "25%" }}
                  bg={""}
                  align="center"
                >
                  {" "}
                  <Image src="/assets/images/logo.png" h={"30%"} />
                </Flex>
                <Flex
                  height={"80%"}
                  w={{ base: "65%", md: "60%" }}
                  bg={""}
                  flexDir="column"
                  align={"center"}
                  justify={{ base: "center", md: "center" }}
                >
                  <Text w={"100%"} h="fit-content" textAlign={"right"}>
                    <b>Payment Modal</b>
                  </Text>
                  <Text w={"100%"} h="fit-content" textAlign={"right"}>
                    WbridgeAdvisors  Investment Management - Deposit
                  </Text>
                </Flex>
              </Flex>
              <Flex
                minH={"100px"}
                bg=""
                align={"center"}
                justify="space-around"
                // border={"4px solid #d7d7d7"}
                mt="30px"
                // px={"20px"}
                flexDir="column"
              >
                <Flex
                  height={"80px"}
                  w="100%"
                  bg={""}
                  border={"1px solid #d7d7d7"}
                  align="center"
                  p={"20px"}
                  justify="space-between"
                >
                  <b>Payment Method</b>
                  <Flex>
                    <Flex h={"30px"} w="30px" bg={""} mr="10px">
                      <Image
                        src={`/assets/images/${
                          props.network === "Bitcoin"
                            ? "bit.png"
                            : props.network === "Ethereum"
                            ? "ether.png"
                            : props.network === "xrp"
                            ? "xpr.png"
                            : "tet.png"
                        }`}
                        h="30px"
                        w={"40px"}
                      />
                    </Flex>

                    <b>{props.network}</b>
                  </Flex>
                </Flex>
                <Flex
                  height={"40px"}
                  w="100%"
                  bg={""}
                  border={"1px solid #d7d7d7"}
                  align="center"
                  p={"20px"}
                  justify="space-between"
                >
                  <b>Investment Plan</b>
                  <Flex>
                    <b>{props.plan}</b>
                  </Flex>
                </Flex>
                <Flex
                  height={"40px"}
                  w="100%"
                  bg={""}
                  border={"1px solid #d7d7d7"}
                  align="center"
                  p={"20px"}
                  justify="space-between"
                >
                  <Text display={{ base: "none", md: "block" }}>
                    <b>Minimum Amount: </b>
                    {props.plan === "Regular"
                      ? "$500"
                      : props.plan === "Premium"
                      ? "$5,000"
                      : props.plan === "Zenith"
                      ? "$30,000"
                      : props.plan === "Horizon"
                      ? "$50,000"
                      : props.plan === "Retirement"
                      ? "$100,000"
                      : "$1,000,000"}
                  </Text>
                  <Text display={{ base: "block", md: "none" }}>
                    <b>Min: </b>
                    {props.plan === "Regular"
                      ? "$500"
                      : props.plan === "Premium"
                      ? "$5,000"
                      : props.plan === "Zenith"
                      ? "$30,000"
                      : props.plan === "Horizon"
                      ? "$50,000"
                      : props.plan === "Retirement"
                      ? "$100,000"
                      : "$1,000,000"}
                  </Text>
                  <Flex display={{ base: "none", md: "block" }}>
                    <b>Maximum Amount:</b>{" "}
                    {props.plan === "Regular"
                      ? "$4,999"
                      : props.plan === "Premium"
                      ? "$29,999"
                      : props.plan === "Zenith"
                      ? "$49,999"
                      : props.plan === "Horizon"
                      ? "$100,000"
                      : props.plan === "Retirement"
                      ? "unlimited"
                      : "$Unlimited"}
                  </Flex>
                  <Text display={{ base: "block", md: "none" }}>
                    <b>Max: </b>
                    {props.plan === "Regular"
                      ? "$4,999"
                      : props.plan === "Premium"
                      ? "$29,999"
                      : props.plan === "Zenith"
                      ? "$49,999"
                      : props.plan === "Horizon"
                      ? "$100,000"
                      : props.plan === "Retirement"
                      ? "unlimited"
                      : "$Unlimited"}
                  </Text>
                </Flex>
                <Flex
                  minH={"100px"}
                  w="100%"
                  bg={"bg.subMain"}
                  border={"1px solid #d7d7d7"}
                  align="center"
                >
                  <FormControl
                    py={{ base: "0.9rem", md: "10px" }}
                    px={{ base: "1rem", md: "20px" }}
                    w="100%"
                    h={"100%"}
                    bg="bg.subMain"
                    // mt={{ base: "1.5rem", md: "32px" }}
                  >
                    <FormHelperText color={"teal.600"}>
                      <i>Copy Address and Make Payment</i>
                    </FormHelperText>
                    <Text py={"5px"}>{/* <b>Wallet Address:</b> */}</Text>

                    <Text>
                      {
                        "sahbabas"
                        // props.network === "Bitcoin"
                        //   ? props?.data?.btc
                        //   : props.network === "Ethereum"
                        //   ? props?.data?.ethereum
                        //   : props.network === "xrp"
                        //   ? props?.data?.xrp
                        //   : props.network === "usdt"
                        //   ? props?.data?.usdt
                        //   : ""
                      }
                    </Text>
                  </FormControl>
                </Flex>
                <Flex
                  minH={"100px"}
                  w="100%"
                  bg={""}
                  border={"1px solid #d7d7d7"}
                  align="center"
                >
                  <FormControl
                    py={{ base: "0.9rem", md: "10px" }}
                    px={{ base: "1rem", md: "20px" }}
                    w="100%"
                    h={"100%"}
                    bg="white"
                    // mt={{ base: "1.5rem", md: "32px" }}
                  >
                    <Text py={"5px"}>
                      <b>Proof Of Payment:</b>
                    </Text>
                    <Input
                      variant="unstyled"
                      placeholder="Instructors Name"
                      color="font.dark"
                      fontWeight="500"
                      name="amount"
                      boxShadow={"lg"}
                      border="2px solid teal"
                      bg={"white"}
                      h="60px"
                      px={"20px"}
                      py={"10px"}
                      onChange={(e) => {
                        if (e.target.files) {
                          setSelected(e.target.files[0]);
                        }
                      }}
                      type="file"
                    />
                  </FormControl>
                </Flex>

                <Formik
                  initialValues={initialValues}
                  onSubmit={async (values) => {
                    async function init() {
                      // console.log(select, values);
                      if (!select) {
                        notifyError("No Image Was Selected");
                      }
                      if (select) {
                        const formData = new FormData();
                        formData.append("file", select);
                        formData.append(
                          "upload_preset",
                          `${import.meta.env.VITE_UPLOAD_PRESET}`
                        );

                        await axios
                          .post(
                            `${import.meta.env.VITE_CLOUDINARY_URL}`,
                            formData
                          )
                          .then((response) => {
                            // console.log(response.data);
                            const object = {
                              plan: props.plan,
                              image: response.data.url,
                            };
                            const body = { ...values, ...object };
                            // console.log(body);
                            return body;
                          })
                          .then((result) => {
                            dispatch(Deposit(result)).then((result) => {
                              if (result.meta.requestStatus === "fulfilled") {
                                notifySuccess(result.payload);
                                setSelected("");
                              }
                              if (result.meta.requestStatus === "rejected") {
                                notifyError(result.payload);
                              }
                            });
                            props.onClose();
                          });
                      }
                    }
                    init();
                  }}
                >
                  {(prop) => (
                    <form
                      onSubmit={prop.handleSubmit}
                      autoComplete="off"
                      style={{ backgroundColor: "", width: "100%" }}
                    >
                      <Flex
                        minH={"100px"}
                        w="100%"
                        bg={""}
                        border={"1px solid #d7d7d7"}
                        align="center"
                      >
                        <FormControl
                          py={{ base: "0.9rem", md: "10px" }}
                          px={{ base: "1rem", md: "20px" }}
                          w="100%"
                          h={"100%"}
                          bg="white"
                          // mt={{ base: "1.5rem", md: "32px" }}
                        >
                          <Text py={"5px"}>
                            <b>Amount Deposited:</b>
                          </Text>
                          <Field
                            as={Input}
                            variant="unstyled"
                            placeholder="Amount"
                            color="font.dark"
                            fontWeight="500"
                            name="amount"
                            boxShadow={"lg"}
                            border="2px solid teal"
                            bg={"white"}
                            h="40px"
                            px={"20px"}
                            type="number"
                          />
                        </FormControl>
                      </Flex>
                      <Box pt={{ base: "20px", md: "30px" }}>
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          // bg="red"
                          justifyContent="right"
                          columnGap={{ base: "1rem", md: "68px" }}
                          pt={{ base: "2rem", md: "45px" }}
                        >
                          <Button
                            borderColor="teal.700"
                            borderWidth="1px"
                            w={{ base: "100%", md: "206px" }}
                            h={{ base: "2.2rem", md: "56px" }}
                            fontSize={{ base: "1rem", md: "24px" }}
                            bg="none"
                            borderRadius={"none"}
                            _hover={{ bg: "teal.900", color: "gray.200" }}
                            py={{ base: "25px", md: "15px" }}
                            transition="0.6s"
                            onClick={props.onClose}
                          >
                            Discard
                          </Button>
                          <Button
                            bg="teal.700"
                            mt={{ base: "20px", md: "0" }}
                            w={{ base: "100%", md: "206px" }}
                            h={{ base: "2.2rem", md: "56px" }}
                            fontSize={{ base: "1rem", md: "24px" }}
                            py={{ base: "25px", md: "15px" }}
                            color="white"
                            type="submit"
                            _hover={{ bg: "teal.900", color: "gray.200" }}
                            transition="0.6s"
                            borderRadius={"none"}
                          >
                            Save
                          </Button>
                        </Flex>
                      </Box>
                    </form>
                  )}
                </Formik>
              </Flex>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
