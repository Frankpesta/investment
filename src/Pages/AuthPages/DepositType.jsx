import {
  Box,
  Flex,
  Heading,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import AddNewUser from "../../components/modal/AddNewUser";
import { useParams, useNavigate } from "react-router-dom";
import { useCustomToast } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
// import { reset } from "../../app/services/auth/depositSlice";
// import { GetCrypto } from "../../app/services/auth/crypto";

export default function DepositType({ ...rest }) {
  const [delivery, setValue] = useState();
  const [coin, setcoin] = useState();
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { type } = useParams();
  const navigate = useNavigate();
  // const { isError, message } = useSelector(
  //   (state) => state.Reducers.deposit
  // );
  // const { blog } = useSelector((state) => state.Reducers.crypto);
  const { notifyError } = useCustomToast();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (delivery) {
        onOpen();
      }
      // if (blog) {
      //   setcoin(blog);
      // }
    } catch (error) {
      console.log(error);
    }
  }, [delivery]);

  // useEffect(() => {
  //   async function init() {
  //     await dispatch(GetCrypto());
  //   }
  //   init();
  // }, [dispatch]);

  // useEffect(() => {
  //   try {
  //     dispatch(reset);
  //     if (isError) {
  //       notifyError(message);
  //       dispatch(reset);
  //     }
  //   } catch (error) {
  //     console.log(error as TypeError);
  //   }
  // }, [isError]);

  function handleChnge(e) {
    setValue(e);
  }

  return (
    <Layout>
      <AddNewUser
        onClose={onClose}
        network={delivery}
        plan={type}
        isOpen={isOpen}
        data={coin}
      />
      <Box color={"black"} pt="50px" pb="150px">
        <Text
          ml={{ base: "10px", md: "30px" }}
          mb={{ base: "20px", md: "0" }}
          cursor="pointer"
          onClick={() => navigate(-1)}
        >
          Back
        </Text>
        <Flex
          w={{ base: "95%", md: "60%" }}
          m="auto"
          flexDir={"column"}
          bg="white"
          p={"10px"}
        >
          <Heading fontSize={"30px"}>Select Network</Heading>
          <Text py={"20px"}>
            <i>Choose Crypto Network To Make Payment With</i>
          </Text>
          <RadioGroup onChange={handleChnge} value={delivery}>
            <Stack color={"black"}>
              <Radio value="Bitcoin" border={"1px solid teal"}>
                <Flex
                  h={"60px"}
                  w="100%"
                  pl={"20px"}
                  bg={""}
                  align="center"
                  justify={"center"}
                >
                  <Flex h={"40%"} w="fit-content" bg={""}>
                    <Image src="/assets/images/bit.png" />
                  </Flex>
                  <Text ml={"8px"} fontWeight="600">
                    Bitcoin
                  </Text>
                </Flex>
              </Radio>
              <Radio value="Ethereum" border={"1px solid teal"}>
                <Flex
                  h={"60px"}
                  w="100%"
                  pl={"10px"}
                  bg={""}
                  align="center"
                  justify={"center"}
                >
                  <Flex h={"40%"} w="fit-content" bg={""}>
                    <Image src="/assets/images/ether.png" />
                  </Flex>
                  <Text ml={"8px"} fontWeight="600">
                    Ethereum Main Network
                  </Text>
                </Flex>
              </Radio>
              <Radio value="xrp" border={"1px solid teal"}>
                <Flex
                  h={"60px"}
                  w="100%"
                  pl={"20px"}
                  bg={""}
                  align="center"
                  justify={"center"}
                >
                  <Flex h={"40%"} w="fit-content" bg={""}>
                    <Image src="/assets/images/xrp.jpeg" />
                  </Flex>
                  <Text ml={"8px"} fontWeight="600">
                    XRP
                  </Text>
                </Flex>
              </Radio>
              <Radio value="usdt" border={"1px solid teal"}>
                <Flex
                  h={"60px"}
                  w="100%"
                  pl={"22px"}
                  bg={""}
                  align="center"
                  justify={"center"}
                >
                  <Flex h={"40%"} w="fit-content" bg={""}>
                    <Image src="/assets/images/tet.png" />
                  </Flex>
                  <Text ml={"8px"} fontWeight="600">
                    Tether USD
                  </Text>
                </Flex>
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </Box>
    </Layout>
  );
}
