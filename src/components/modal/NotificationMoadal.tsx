import { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Box,
  ModalOverlay,
  Heading,
  Text,
  Center,
  Flex,
  Divider,
  Avatar,
} from "@chakra-ui/react";
// import { notifyDataDetails } from "../../app/services/type";
import { PreviousFmtted } from "../../util/moment";
import { notifyDataDetails } from "../../app/services/type";
import { useAppSelector } from "../../app/services/hooks";

type Mrops = {
  isOpen: boolean;
  onClose: () => void;
  data: notifyDataDetails[];
};

export default function NotificationModal(props: Mrops) {
  const [notifyData, setNotifyData] = useState<notifyDataDetails[]>();
  const { user: notify } = useAppSelector((state) => state.Reducers.notify);
  useEffect(() => {
    // console.log(notifyData);
    if (notify) {
      setNotifyData(notify.data);
    }
  }, [notify]);

  return (
    <Modal
      isOpen={props.isOpen}
      size={{ base: "sm", md: "lg" }}
      onClose={props.onClose}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(10deg)"
      />
      <ModalContent>
        <ModalCloseButton color="font.main" />
        <ModalBody bg="white" padding={0}>
          <Box pt="53px">
            <Heading
              ps="42px"
              fontSize={{ base: "1.2rem", md: "24px" }}
              fontWeight="600"
              color="font.dark"
            >
              Notifications
            </Heading>
            <Flex
              justifyContent="space-between"
              ps="36px"
              pe="15px"
              pb="13.5px"
              mt="37.5px"
              fontSize={{ base: "0.9rem", md: "1.1rem" }}
            >
              <Text>All (3) </Text>
              <Text
                _active={{ color: "black" }}
                color="#407BFF"
                cursor={"pointer"}
              >
                Mark as all read
              </Text>
            </Flex>
            <Divider
              borderBottomColor={"#C4C4C4"}
              borderBottomWidth={{ base: "1px", md: "2px" }}
            />
          </Box>
          <Box pt="10px">
            {notifyData?.slice(0, 3).map((item) => (
              <Box
                key={item.id}
                pt="16.16px"
                pb="16px"
                borderBottomColor={"#C4C4C4"}
                borderBottomWidth="1px"
              >
                <Flex ps="29.67px" pe="26.5px" columnGap={"12px"}>
                  <Center>
                    <Avatar src="/assets/images/icon.png" />
                  </Center>
                  <Box color="font.dark">
                    <Heading fontSize="14px" fontWeight={"600"}>
                      {item.title}
                    </Heading>
                    <Text
                      mt="9px"
                      fontSize={"10px"}
                      fontWeight="400"
                      lineHeight="20px"
                    >
                      {item.message}
                    </Text>
                    <Text
                      mt=""
                      fontWeight={"500"}
                      fontSize="10px"
                      color="font.main"
                    >
                      {" "}
                      {PreviousFmtted(item.created_at)}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>

          <Box pt="11px" pb="13px" ps="32px">
            {/* <Link to={routeObj.about}>
              <Heading fontSize={"14px"} fontWeight="600" color="font.main">
                See all Notifications
              </Heading>
            </Link> */}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
