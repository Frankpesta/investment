import {
  Box,
  Flex,
  Heading,
  FormControl,
  Input,
  Button,
  Skeleton,
  Select,
} from "@chakra-ui/react";
import Layout from "../../layouts/Layout";
import { useCustomToast } from "../../utils/toast";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  profileEdit,
  reset,
  getProfile,
} from "../../app/services/auth/profileSlice";
import { useNavigate } from "react-router-dom";
import { routeObj } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function EditProfile() {
  const { notifyError } = useCustomToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, message } = useSelector((state) => state.profile);
  let id = user?.id;

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    fullname: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    last_name: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    phone: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    country: Yup.string().min(0, "Too Short!").max(30, "Too Long!"),
  });

  const initialValues = {
    email: user?.email,
    phone: user?.phone,
    fullname: user?.fullname,
    country: user?.country,
    crypto: user?.crypto ? user?.crypto : "bitcoin",
    address: user?.address,
    // email: "",
    // phone: "",
    // fullname: "",
    // country: "",
    // crypto: "bitcoin",
    // address: "",
  };

  useEffect(() => {
    const vv = localStorage.getItem("userInfo");
    if (vv) {
      const gg = JSON.parse(vv);
      const id = gg.user.id;
      dispatch(getProfile(id));
    }
  }, []);

  return (
    <Layout>
      <Skeleton isLoaded={!isLoading}>
        <Box
          pt={{ base: "3rem", md: "84px" }}
          pe={{ base: "1rem", md: "59px" }}
          pb={{ base: "140px", md: "238px" }}
          ps={{ base: "1rem", md: "59px" }}
          color="black"
        >
          <Heading fontSize={{ base: "1.3rem", md: "32px" }} fontWeight="700">
            Edit Profile
          </Heading>

          <Box pt={{ base: "1rem", md: "100px" }}>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values, id);

                const body = { values, id };
                dispatch(profileEdit(body)).then((result) => {
                  if (result.meta.requestStatus === "fulfilled") {
                    navigate(routeObj.profile);
                    dispatch(reset());
                  }
                  if (result.meta.requestStatus === "rejected") {
                    notifyError(message);
                    dispatch(reset());
                  }
                });
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Flex bg={""} justify="space-between" wrap={"wrap"}>
                    <FormControl
                      h={"80px"}
                      bg="white"
                      borderBottomColor={"#2a2b2c5e"}
                      mt={{ base: "15px", md: "30px" }}
                      borderBottomWidth={{ base: "", md: "1px" }}
                      px={{ base: "10px", md: "" }}
                      w={{ base: "100%", md: "48%" }}
                      py="0.9rem"
                    >
                      <Field
                        as={Input}
                        placeholder="First Name"
                        borderColor="#C9C9C9"
                        color="font.dark"
                        name="fullname"
                        _placeholder={{ color: "font.dark" }}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.fullname}
                        fontWeight={"400"}
                        variant={"unstyled"}
                      />
                      {props.errors.fullname && props.touched.fullname ? (
                        <div>{props.errors.fullname}</div>
                      ) : null}
                    </FormControl>

                    <FormControl
                      h={"80px"}
                      bg="white"
                      mt={{ base: "15px", md: "30px" }}
                      borderBottomColor={"#2a2b2c5e"}
                      borderBottomWidth={{ base: "", md: "1px" }}
                      px={{ base: "10px", md: "" }}
                      w={{ base: "100%", md: "48%" }}
                      py="0.9rem"
                    >
                      <Field
                        as={Input}
                        name="email"
                        variant="unstyled"
                        placeholder="Email"
                        borderColor="#C9C9C9"
                        color="font.dark"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                        _placeholder={{ color: "font.dark" }}
                      />
                      {props.errors.email && props.touched.email ? (
                        <div>{props.errors.email}</div>
                      ) : null}
                    </FormControl>
                    <FormControl
                      h={"80px"}
                      bg="white"
                      mt={{ base: "15px", md: "30px" }}
                      borderBottomColor={"#2a2b2c5e"}
                      borderBottomWidth={{ base: "", md: "1px" }}
                      px={{ base: "10px", md: "" }}
                      w={{ base: "100%", md: "48%" }}
                      py="0.9rem"
                    >
                      <Field
                        as={Input}
                        name="phone"
                        variant="unstyled"
                        borderColor="#C9C9C9"
                        color="font.dark"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.phone}
                        _placeholder={{ color: "font.dark" }}
                      />
                      {props.errors.phone && props.touched.phone ? (
                        <div>{props.errors.phone}</div>
                      ) : null}
                    </FormControl>
                    <FormControl
                      h={"80px"}
                      bg="white"
                      mt={{ base: "15px", md: "30px" }}
                      borderBottomColor={"#2a2b2c5e"}
                      borderBottomWidth={{ base: "", md: "1px" }}
                      px={{ base: "10px", md: "" }}
                      w={{ base: "100%", md: "48%" }}
                      py="0.9rem"
                    >
                      <Field
                        as={Input}
                        id="password"
                        name="country"
                        variant="unstyled"
                        placeholder="Last Name"
                        borderColor="#C9C9C9"
                        color="font.dark"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.country}
                        _placeholder={{ color: "font.dark" }}
                      />
                      {props.errors.country && props.touched.country ? (
                        <div>{props.errors.country}</div>
                      ) : null}
                    </FormControl>
                    <FormControl
                      h={"80px"}
                      bg="white"
                      mt={{ base: "15px", md: "30px" }}
                      borderBottomColor={"#2a2b2c5e"}
                      borderBottomWidth={{ base: "", md: "1px" }}
                      px={{ base: "10px", md: "" }}
                      w={{ base: "100%", md: "48%" }}
                      py="0.9rem"
                    >
                      <Select
                        name="crypto"
                        _placeholder={{ backgroundColor: "white" }}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        // value={props.values.address}
                      >
                        <option
                          style={{ backgroundColor: "white" }}
                          value={props.values.crypto}
                        >
                          {user?.crypto}
                        </option>
                        <option
                          style={{ backgroundColor: "white" }}
                          value="bitcoin"
                        >
                          Bitcoin
                        </option>
                        <option
                          style={{ backgroundColor: "white" }}
                          value="usdt(erc20)"
                        >
                          USDT (ERC20)
                        </option>
                        <option
                          style={{ backgroundColor: "white" }}
                          value="usdt(trc20)"
                        >
                          USDT (TRC20)
                        </option>
                      </Select>
                    </FormControl>
                    <FormControl
                      h={"80px"}
                      bg="white"
                      mt={{ base: "15px", md: "30px" }}
                      borderBottomColor={"#2a2b2c5e"}
                      borderBottomWidth={{ base: "", md: "1px" }}
                      px={{ base: "10px", md: "" }}
                      w={{ base: "100%", md: "48%" }}
                      py="0.9rem"
                    >
                      <Field
                        as={Input}
                        name="address"
                        variant="unstyled"
                        placeholder="Wallet Address"
                        borderColor="#C9C9C9"
                        color="font.dark"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.address}
                        _placeholder={{ color: "font.dark" }}
                      />
                    </FormControl>
                  </Flex>

                  <Box pt={{ base: "3rem", md: "72px" }}>
                    <Flex
                      justifyContent="left"
                      columnGap={{ base: "1rem", md: "68px" }}
                      pt={{ base: "2rem", md: "45px" }}
                    >
                      <Button
                        borderColor="bg.main"
                        borderWidth="1px"
                        w={{ base: "104px", md: "206px" }}
                        h={{ base: "2.2rem", md: "56px" }}
                        fontSize={{ base: "1rem", md: "24px" }}
                        bg="none"
                        type="button"
                        onClick={() => navigate(-1)}
                        borderRadius={"none"}
                        _hover={{ bg: "teal.700", color: "gray.200" }}
                        transition="0.6s"
                      >
                        Discard
                      </Button>
                      <Button
                        bg="teal.700"
                        w={{ base: "104px", md: "206px" }}
                        h={{ base: "2.2rem", md: "56px" }}
                        fontSize={{ base: "1rem", md: "24px" }}
                        color="white"
                        _hover={{ bg: "teal.900", color: "gray.200" }}
                        transition="0.6s"
                        borderRadius={"none"}
                        type="submit"
                        columnGap="20px"
                      >
                        Save
                      </Button>
                    </Flex>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Skeleton>
    </Layout>
  );
}
