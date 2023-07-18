import { useEffect, useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Box,
  ModalOverlay,
  Heading,
  Text,
  Spinner,
  Divider,
  Input,
  Center,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/services/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { MyEditValuesP } from "../../app/services/type";
import {
  pictureEdit,
  getProfile,
  pictureRemove,
} from "../../app/services/auth/profileSlice";
import { UpdateBlog, GetBlog } from "../../app/services/auth/blogSlice";
import { Field, Formik } from "formik";
import { useCustomToast } from "../../utils/toast";
import {
  BlogDData,
  BlogDDts,
  ViewBlogDData,
} from "../../app/services/response";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

type Mpops = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  value: string;
  data: any;
};

export type BlDData = {
  title: string;
  description: string;
};

export default function EditModal(props: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [select, setSelected] = useState<File | null>(null);
  const [loading, SetLoading] = useState<boolean>(false);
  let id: number;
  let cookie = localStorage.getItem("userInfo");
  if (cookie) {
    let dd = JSON.parse(cookie);
    id = dd.user.id;
  }

  const handleInput = () => {
    document.getElementById("upload-btn")!.click();
  };

  useEffect(() => {
    if (select) {
      const formData = new FormData();
      formData.append("file", select!);
      formData.append(
        "upload_preset",
        `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`
      );
      SetLoading(true);
      axios
        .post(`${process.env.REACT_APP_CLOUDINARY_URL}`, formData)
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .then((data) => {
          if (props.title === "profile") {
            console.log("profile");
            props.onClose();
            let value = { image: `${data.url}` };
            const body: MyEditValuesP = { value, id };
            console.log(body);
            dispatch(pictureEdit(body));
            SetLoading(false);
          }
        })
        .then(() => {
          setSelected(null);
          dispatch(getProfile(id!.toString()));
        });
    }
  }, [select, navigate]);

  const handleRemove = () => {
    if (props.title === "profile") {
      const block2 = async () => {
        console.log("profile");
        props.onClose();
        let value = { image: " " };
        const body: MyEditValuesP = { value, id };
        console.log(body);
        await dispatch(pictureRemove(body));
        props.onClose();
        await dispatch(getProfile(id!.toString()));
      };
      block2();
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      size={{ base: "xs", md: "lg" }}
      onClose={props.onClose}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(10deg)"
      />
      <ModalContent>
        <ModalCloseButton color="font.main" />
        <ModalBody padding={0} bg="white">
          <Box pt={{ base: "3rem", md: "114px" }} textAlign="center">
            <Heading
              fontSize={{ base: "1rem", md: "32px" }}
              fontWeight="700"
              color="font.dark"
            >
              Change {props.title} photo
            </Heading>
            {/* {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="sm"
              />
            ) : (
              ""
            )} */}
            <Center>
              {" "}
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="sm"
                display={loading ? "inline-flex" : "none"}
              />
            </Center>
            <Divider
              borderBottomWidth={{ base: "1px", md: "2px" }}
              borderColor="#C4C4C4"
              mt={{ base: "2.5rem", md: "63px" }}
            />
            <Text
              py={{ base: "0.8rem", md: "24px" }}
              color="#407BFF"
              fontSize={{ base: "0.8rem", md: "24px" }}
              fontWeight="500"
              cursor="pointer"
              onClick={handleInput}

              // if (!isLoading) {
              // document.getElementById("upload-btn")!.click();
              // }
              // props.onClose();
            >
              Upload photo
              <Input
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setSelected(e.target.files[0]);
                  }
                }}
                hidden
                id="upload-btn"
              />
            </Text>
            <Divider
              borderBottomWidth={{ base: "1px", md: "2px" }}
              borderColor="#C4C4C4"
            />
            <Text
              py={{ base: "0.8rem", md: "24px" }}
              color="#D00000"
              fontSize={{ base: "0.8rem", md: "24px" }}
              fontWeight="500"
              cursor="pointer"
              onClick={handleRemove}
            >
              Remove Current Photo
            </Text>
            <Divider
              borderBottomWidth={{ base: "1px", md: "2px" }}
              borderColor="#C4C4C4"
            />
            <Text
              py={{ base: "0.8rem", md: "24px" }}
              color="font.dark"
              fontSize={{ base: "0.8rem", md: "24px" }}
              fontWeight="500"
              cursor="pointer"
              onClick={props.onClose}
            >
              Cancel
            </Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export function EditLecture(props: Mpops) {
  const { notifyError, notifySuccess } = useCustomToast();

  const { blog, isLoading } = useAppSelector((state) => state.Reducers.blog);
  const dispatch = useAppDispatch();
  const [LectureDet, setLectureDet] = useState<BlogDDts>();
  let id = props.value;

  useEffect(() => {
    const data = blog?.find((item) => item.id === id);
    setLectureDet(data);
  }, [id, blog]);

  const initialValues: BlDData = {
    title: LectureDet?.title ? LectureDet.title : "",
    description: LectureDet?.description ? LectureDet.description : "",
  };

  const inputFontSize = { base: "16px", md: "1.2rem" };

  return (
    <Modal
      isOpen={props.isOpen}
      size={{ base: "xs", md: "xl" }}
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
            pt={{ base: "3rem", md: "40px" }}
            pe={{ base: "1rem", md: "59px" }}
            pb={{ base: "140px", md: "38px" }}
            ps={{ base: "1rem", md: "100px" }}
            color="font.dark"
          >
            <Flex
              fontSize={{ base: "1.2rem", md: "32px" }}
              fontWeight="600"
              align={"center"}
              justify="left"
            >
              <Text>Edit Blog</Text>{" "}
              {isLoading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="sm"
                  ml={"30px"}
                />
              ) : (
                ""
              )}
            </Flex>

            <Box pt={{ base: "2.5rem", md: "30px" }}>
              <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={async (values) => {
                  const body: ViewBlogDData = { values, id };
                  // console.log(body);
                  await dispatch(UpdateBlog(body))
                    .then((result) => {
                      // console.log(result);

                      if (result.meta.requestStatus === "fulfilled") {
                        notifySuccess(result.payload);
                        dispatch(GetBlog());
                        props.onClose();
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
                      bg="bg.subMain"
                    >
                      <Input
                        placeholder=" "
                        fontSize={inputFontSize}
                        fontWeight={"400"}
                        variant={"unstyled"}
                        onChange={prop.handleChange}
                        onBlur={prop.handleBlur}
                        name="title"
                        value={prop.values.title || undefined}
                      />
                      <FormLabel>Title</FormLabel>
                    </FormControl>

                    <FormControl
                      variant="floating"
                      id="first-name"
                      py={{ base: "25px", md: "22px" }}
                      px={{ base: "1rem", md: "34px" }}
                      mt="30px"
                      w="100%"
                      bg="bg.subMain"
                    >
                      <Textarea
                        placeholder=" "
                        variant={"unstyled"}
                        onChange={prop.handleChange}
                        onBlur={prop.handleBlur}
                        h="200px"
                        name="video"
                        value={
                          prop.values.description ? prop.values.description : ""
                        }
                        fontSize={inputFontSize}
                        fontWeight={"400"}
                      />
                      <FormLabel>Description</FormLabel>
                    </FormControl>

                    <Box pt={{ base: "3rem", md: "30px" }}>
                      <Flex
                        direction={{ base: "column", md: "row" }}
                        // bg="red"
                        justifyContent="right"
                        columnGap={{ base: "1rem", md: "68px" }}
                        pt={{ base: "2rem", md: "45px" }}
                      >
                        {/* <Link to={routeObj.mysessions}> */}
                        <Button
                          onClick={props.onClose}
                          borderColor="bg.main"
                          borderWidth="1px"
                          w={{ base: "100%", md: "206px" }}
                          h={{ base: "2.2rem", md: "56px" }}
                          fontSize={{ base: "1rem", md: "24px" }}
                          bg="none"
                          borderRadius={"none"}
                          _hover={{ bg: "blue.700", color: "gray.200" }}
                          transition="0.6s"
                        >
                          Discard
                        </Button>
                        {/* </Link> */}
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
                          Save
                        </Button>
                      </Flex>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
