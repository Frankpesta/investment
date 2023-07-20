import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  FormLabel,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import Layout from "../../layouts/Layout";
import { GetCrypto, UpdateCoin } from "../../app/services/auth/crypto";
import { useCustomToast } from "../../utils/toast";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

export default function Address() {
  const { notifyError, notifySuccess } = useCustomToast();

  const { blog } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  let id = blog ? blog.id : "";
  // console.log(blog);

  useEffect(() => {
    async function init() {
      await dispatch(GetCrypto());
    }
    init();
  }, [dispatch]);

  // type Doingek = {
  //   btc: string;
  //   ethereum: string;
  //   xrp: string;
  //   usdt: string;
  // };

  const initialValues = {
    btc: blog ? blog.btc : "",
    ethereum: blog ? blog.ethereum : "",
    usdt: blog ? blog.usdt : "",
    xrp: blog ? blog.xrp : "",
  };

  const inputFontSize = { base: "16px", md: "1.2rem" };

  return (
    <Layout>
      <Box
        pt={{ base: "3rem", md: "40px" }}
        pe={{ base: "1rem", md: "59px" }}
        pb={{ base: "140px", md: "78px" }}
        ps={{ base: "1rem", md: "100px" }}
        color="font.dark"
      >
        <Flex
          fontSize={{ base: "1.2rem", md: "32px" }}
          fontWeight="600"
          align={"center"}
          justify="left"
        >
          <Text>Edit Address</Text>{" "}
        </Flex>

        <Box pt={{ base: "2.5rem", md: "30px" }}>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={async (values) => {
              const body = { values, id };
              // console.log(values);
              await dispatch(UpdateCoin(body))
                .then((result) => {
                  if (result.meta.requestStatus === "fulfilled") {
                    notifySuccess(result.payload);
                    dispatch(GetCrypto());
                  }

                  if (result.meta.requestStatus === "rejected") {
                    notifyError(result.payload);
                  }
                })
                .catch((error) => {
                  notifyError(error);
                });
            }}
          >
            {(prop) => (
              <form onSubmit={prop.handleSubmit}>
                <FormControl
                  variant="floating"
                  id="first-name"
                  py={{ base: "25px", md: "22px" }}
                  px={{ base: "1rem", md: "34px" }}
                  mt="30px"
                  w="100%"
                  bg="white"
                  boxShadow="lg"
                >
                  <Input
                    placeholder=" "
                    fontSize={inputFontSize}
                    fontWeight={"400"}
                    variant={"unstyled"}
                    onChange={prop.handleChange}
                    onBlur={prop.handleBlur}
                    name="btc"
                    value={prop.values.btc || undefined}
                  />
                  <FormLabel>Bitcoin</FormLabel>
                </FormControl>

                <FormControl
                  variant="floating"
                  id="first-name"
                  py={{ base: "25px", md: "22px" }}
                  px={{ base: "1rem", md: "34px" }}
                  mt="30px"
                  w="100%"
                  bg="white"
                  boxShadow="lg"
                >
                  <Input
                    placeholder=" "
                    variant={"unstyled"}
                    onChange={prop.handleChange}
                    onBlur={prop.handleBlur}
                    // h="200px"
                    name="ethereum"
                    value={prop.values.ethereum ? prop.values.ethereum : ""}
                    fontSize={inputFontSize}
                    fontWeight={"400"}
                  />
                  <FormLabel>Ethereum</FormLabel>
                </FormControl>

                <FormControl
                  variant="floating"
                  id="first-name"
                  py={{ base: "25px", md: "22px" }}
                  px={{ base: "1rem", md: "34px" }}
                  mt="30px"
                  w="100%"
                  bg="white"
                  boxShadow="lg"
                >
                  <Input
                    placeholder=" "
                    variant={"unstyled"}
                    onChange={prop.handleChange}
                    onBlur={prop.handleBlur}
                    // h="200px"
                    name="xrp"
                    value={prop.values.xrp ? prop.values.xrp : ""}
                    fontSize={inputFontSize}
                    fontWeight={"400"}
                  />
                  <FormLabel>XRP</FormLabel>
                </FormControl>

                <FormControl
                  variant="floating"
                  id="first-name"
                  py={{ base: "25px", md: "22px" }}
                  px={{ base: "1rem", md: "34px" }}
                  mt="30px"
                  w="100%"
                  bg="white"
                  boxShadow="lg"
                >
                  <Input
                    placeholder=" "
                    variant={"unstyled"}
                    onChange={prop.handleChange}
                    onBlur={prop.handleBlur}
                    // h="200px"
                    name="usdt"
                    value={prop.values.usdt ? prop.values.usdt : ""}
                    fontSize={inputFontSize}
                    fontWeight={"400"}
                  />
                  <FormLabel>Tether</FormLabel>
                </FormControl>

                <Box pt={{ base: "3rem", md: "30px" }}>
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    // bg="red"
                    justifyContent="right"
                    columnGap={{ base: "1rem", md: "68px" }}
                    pt={{ base: "2rem", md: "45px" }}
                  >
                    <Button
                      bg="teal.700"
                      mt={{ base: "20px", md: "0" }}
                      w={{ base: "100%", md: "206px" }}
                      h={{ base: "2.2rem", md: "56px" }}
                      fontSize={{ base: "1rem", md: "24px" }}
                      color="white"
                      type="submit"
                      _hover={{ bg: "blue.700", color: "gray.200" }}
                      transition="0.6s"
                      borderRadius={"none"}
                    >
                      Update
                    </Button>
                  </Flex>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Layout>
  );
}
