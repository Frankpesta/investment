import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Flex,
  Icon,
  Skeleton,
  IconButton,
  Heading,
  Text,
  useDisclosure,
  Select,
  Input,
} from "@chakra-ui/react";
import Layout from "../../layouts/Layout";
import { MdLocationOn, MdModeEdit } from "react-icons/md";
// import EditModal from "../../Component/modal/EditModal";
import { routeObj } from "../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getProfile } from "../../app/services/auth/profileSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onClose, isOpen, onOpen } = useDisclosure();
  const [title, setTitle] = useState("");
  // const { user, isLoading } = useSelector((state) => state.Reducers.profile);

  const handleTittle = (title) => {
    setTitle(title);
    onOpen();
  };

  useEffect(() => {
    const vv = localStorage.getItem("userInfo");
    if (vv) {
      const gg = JSON.parse(vv);
      const id = gg.user.id;
      // dispatch(getProfile(id));
    }
  }, [dispatch, navigate]);

  return (
    <Layout>
      {/* <EditModal onClose={onClose} title={title} isOpen={isOpen} /> */}
      {/* <Skeleton isLoaded={!isLoading}> */}
      <Box
        pt={{ base: "3rem", md: "84px" }}
        pe={{ base: "1rem", md: "59px" }}
        pb={{ base: "140px", md: "238px" }}
        ps={{ base: "1rem", md: "59px" }}
      >
        <Box w={"100%"} pt="30px">
          <Avatar
            src={""}
            boxSize={{ base: "80px", sm: "200px" }}
            border="solid"
            mt={{ base: "-40px", sm: "-80px" }}
            ml={{ base: "0px", md: "0px" }}
            borderColor={"white"}
            bg="teal.700"
            borderWidth={{ base: "3px", md: "6px" }}
            pos="relative"
            children={
              <>
                <IconButton
                  aria-label="edit profile photo"
                  icon={<MdModeEdit />}
                  padding={0}
                  _hover={{}}
                  boxShadow="md"
                  display={{ base: "none", md: "flex" }}
                  px="0 !important"
                  borderRadius="full"
                  onClick={() => handleTittle("profile")}
                  boxSize={{ base: "1rem", md: "49px" }}
                  color="font.dark"
                  fontSize={{ base: "5px", md: "20px" }}
                  bg="white"
                  pos="absolute"
                  bottom={{ base: "5px", md: "14px" }}
                  right={{ base: "0", md: "0.8rem" }}
                />
                <Box
                  boxShadow="md"
                  color="font.dark"
                  display={{ base: "flex", md: "none" }}
                  bg="white"
                  pos="absolute"
                  bottom={"8px"}
                  right={"8px"}
                  px="0 !important"
                  borderRadius="full"
                  boxSize={"1rem"}
                  justifyContent="center"
                  alignContent="center"
                  pt="3px"
                  cursor={"pointer"}
                  onClick={onOpen}
                >
                  <Icon
                    as={MdModeEdit}
                    color="font.dark"
                    bg="none"
                    fontSize={"10px"}
                  />
                </Box>
              </>
            }
          ></Avatar>
        </Box>
        <Flex justifyContent="space-between" pt={{ base: "1rem", md: "47px" }}>
          <Box color="font.dark">
            <Heading fontSize={{ base: "1rem", md: "32px" }} fontWeight="700">
              {/* {user?.fullname} */}
            </Heading>
            <Text
              fontSize={{ base: "0.7rem", md: "16px" }}
              fontWeight="400"
              mt={{ base: "0.5rem", md: "17.5px" }}
            >
              <Icon as={MdLocationOn} />
              {/* {user?.country} */}
            </Text>
          </Box>
          <Link to={routeObj.editprofile}>
            <IconButton
              aria-label="edit profile"
              icon={<MdModeEdit />}
              _hover={{}}
              boxShadow="md"
              borderRadius="full"
              boxSize={{ base: "2.3rem", md: "49px" }}
              color="white"
              fontSize={{ base: "0.6rem", md: "20px" }}
              bg="teal.700"
            />
          </Link>
        </Flex>

        <Box
          pt={{ base: "2.3rem", md: "118px" }}
          color="font.dark"
          fontSize={{ base: "0.8rem", md: "20px" }}
        >
          <Flex
            justifyContent="space-between"
            columnGap={{ base: "2rem", md: "100px" }}
            pb={{ base: "1.5rem", md: "50px" }}
          >
            <Text
              fontWeight="600"
              flex={{ base: 0.7, md: 0.3 }}
              pt={{ base: "0.2rem", md: "23px" }}
            >
              Email address
            </Text>
            <Text
              flex={1}
              fontWeight="400"
              py={{ base: "0.5rem", md: "23px" }}
              ps={{ base: "0.5rem", md: "34px" }}
              pe={{ base: "0.5rem", md: "19px" }}
              w="73%"
              bg="white"
            >
              {/* {user?.email} */}
            </Text>
          </Flex>

          <Flex
            justifyContent="space-between"
            columnGap={{ base: "2rem", md: "100px" }}
            pb={{ base: "1.5rem", md: "50px" }}
          >
            <Text
              fontWeight="600"
              flex={{ base: 0.7, md: 0.3 }}
              pt={{ base: "0.2rem", md: "23px" }}
            >
              Username
            </Text>
            <Text
              flex={1}
              fontWeight="400"
              py={{ base: "0.5rem", md: "23px" }}
              ps={{ base: "0.5rem", md: "34px" }}
              pe={{ base: "0.5rem", md: "19px" }}
              w="73%"
              bg="white"
            >
              {/* {user?.username} */}
            </Text>
          </Flex>

          <Flex
            justifyContent="space-between"
            columnGap={{ base: "2rem", md: "100px" }}
            pb={{ base: "1.5rem", md: "50px" }}
          >
            <Text
              fontWeight="600"
              flex={{ base: 0.7, md: 0.3 }}
              pt={{ base: "0.2rem", md: "23px" }}
            >
              Phone No
            </Text>
            <Text
              flex={1}
              fontWeight="400"
              py={{ base: "0.5rem", md: "23px" }}
              ps={{ base: "0.5rem", md: "34px" }}
              pe={{ base: "0.5rem", md: "19px" }}
              w="73%"
              bg="white"
            >
              {/* {user?.phone} */}
            </Text>
          </Flex>

          <Box mt={"20px"} bg="" w={"100%"} h="150px" p={"10px"}>
            <Heading fontSize={"30px"}>Withrawal Method</Heading>
            <Flex pt={"20px"} h="70%" justify={"space-between"}>
              <Box bg={"white"} p="20px" h={"100%"} w="25%">
                <Select _placeholder={{ backgroundColor: "white" }}>
                  <option style={{ backgroundColor: "white" }} value="option1">
                    Bitcoin
                  </option>
                  <option style={{ backgroundColor: "white" }} value="option2">
                    USDT (ERC20)
                  </option>
                  <option style={{ backgroundColor: "white" }} value="option3">
                    USDT (TRC20)
                  </option>
                </Select>
              </Box>
              <Box bg={"white"} p="20px" h={"100%"} w="65%">
                <Input
                  id="password"
                  name="country"
                  variant="unstyled"
                  placeholder="Last Name"
                  borderColor="#C9C9C9"
                  color="font.dark"
                  value={"TMYxEM8KPKw2ssShTw4uNrDxinbQw3PGdj"}
                  _placeholder={{ color: "font.dark" }}
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      {/* </Skeleton> */}
    </Layout>
  );
}
