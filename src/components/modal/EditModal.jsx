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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  pictureEdit,
  getProfile,
  pictureRemove,
} from "../../app/services/auth/profileSlice";
import { useDispatch } from "react-redux";

export default function EditModal(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [select, setSelected] = useState(null);
  const [loading, SetLoading] = useState(false);
  let id;
  let cookie = localStorage.getItem("userInfo");
  if (cookie) {
    let dd = JSON.parse(cookie);
    id = dd.user.id;
  }

  const handleInput = () => {
    document.getElementById("upload-btn").click();
  };

  useEffect(() => {
    if (select) {
      const formData = new FormData();
      formData.append("file", select);
      formData.append("upload_preset", `${import.meta.env.VITE_UPLOAD_PRESET}`);
      SetLoading(true);
      axios
        .post(`${import.meta.env.VITE_CLOUDINARY_URL}`, formData)
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .then((data) => {
          if (props.title === "profile") {
            console.log("profile");
            props.onClose();
            let value = { image: `${data.url}` };
            const body = { value, id };
            console.log(body);
            dispatch(pictureEdit(body));
            SetLoading(false);
          }
        })
        .then(() => {
          setSelected(null);
          dispatch(getProfile(id.toString()));
        });
    }
  }, [select, navigate]);

  const handleRemove = () => {
    if (props.title === "profile") {
      const block2 = async () => {
        console.log("profile");
        props.onClose();
        let value = { image: " " };
        const body = { value, id };
        console.log(body);
        await dispatch(pictureRemove(body));
        props.onClose();
        await dispatch(getProfile(id.toString()));
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
