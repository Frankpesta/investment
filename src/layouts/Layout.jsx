import React, { ReactNode, useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiLogOut } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  FaCoins,
  FaUserTie,
  FaBuffer,
  FaAudible,
  FaCreativeCommonsPdAlt,
  FaBlog,
  FaUserFriends,
  FaBitcoin,
} from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney,GiTakeMyMoney, GiMoneyStack } from "react-icons/gi";
import { AiFillProfile } from "react-icons/ai";
import { BiSearchAlt2, BiGlobe } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactText } from "react";
import { routeObj } from "../constants/routes";
// import { routeObj } from "../../constants/routes";
// import { customStyle } from "../../utils/style";
// import NotificationModal from "../../Component/modal/NotificationMoadal";
import { logout } from "../app/services/auth/authSplice";
// import { useAppDispatch, useAppSelector } from "../../app/services/hooks";
// import { notification } from "../../app/services/auth/notification";
// import { LectureQuery, notifyDataDetails } from "../../app/services/type";
// import { getProfile } from "../../app/services/auth/profileSlice";
// import { SwitchType } from "../../Component/modal/SortingModals";

// type LinkItemProps {
//   name: string;
//   url: string;
//   icon: IconType;
// }

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={"#f3f3f3"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="md"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* Nav */}
      <Nav onOpenDrawer={onOpen} />
      <Box
        ml={{ base: 0, md: "260px" }}
        pos="relative"
        minH="calc(100vh)"
        bg={""}
        // overflowY={"scroll"}
        // maxH="200vh"
      >
        {children}

        <Box
          pos="absolute"
          bottom={"0"}
          left="0"
          bg="bg.subMain"
          py="18px"
          px={{ base: "1rem", md: "67px" }}
          w="100%"
        >
          <Flex
            w="100%"
            justifyContent="space-between"
            color="black"
            fontSize={{ base: "12px", md: "16px" }}
            fontStyle="italic"
          >
            <Text fontWeight="600">BlackRock</Text>
            <Text fontWeight="400"> @ 2023 all rights reserved</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ onClose, ...rest }) => {
  const pathName = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onlogout = () => {
    dispatch(logout());
    navigate(routeObj.login);
    window.location.reload();
  };
  const vv = localStorage.getItem("userInfo");
  let typewq;
  if (vv) {
    const gg = JSON.parse(vv);
    typewq = gg.user.type;
  }
  // console.log(typewq);
  const LinkItems = [
    { name: "Dashboard", icon: BsFillBookmarkFill, url: routeObj.home },
    { name: "Deposit Funds", icon: FaCoins, url: routeObj.deposit },
    { name: "View Deposits", icon: GiPayMoney, url: routeObj.viewdeposit },
    { name: "Earnings", icon: GiTakeMyMoney, url: routeObj.usersprofit },
    {
      name: "View Withdrawals",
      icon: GiMoneyStack,
      url: routeObj.viewwithdrawal,
    },
    { name: "My Referrals", icon: AiFillProfile, url: routeObj.referrer },
    { name: "Profile", icon: FaUserTie, url: routeObj.profile },
  ];

  const AdminLinkItems = [
    { name: "Dashboard", icon: BsFillBookmarkFill, url: routeObj.home2 },
    { name: "All Users", icon: FaUserFriends, url: routeObj.allusers },
    { name: "All Deposits", icon: FaBuffer, url: routeObj.alldeposits },
    {
      name: "Withdrawal Requests",
      icon: FaAudible,
      url: routeObj.allrequests,
    },
    {
      name: "All Withdrawals",
      icon: FaCreativeCommonsPdAlt,
      url: routeObj.allwithdrawals,
    },
    { name: "Crypto Address", icon: FaBitcoin, url: routeObj.address },
    // { name: "My Referrals", icon: AiFillProfile, url: routeObj.referrer },
    { name: "Profile", icon: FaUserTie, url: routeObj.profile },
  ];
  // const { user } = useSelector((state) => state.Reducers.profile);

  return (
    <Box
      transition="3s ease"
      bg={"teal.700"}
      w={{ base: "full", md: "260px" }}
      color="white"
      pos="fixed"
      h="full"
      overflowY="scroll"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
      {...rest}
    >
      <Flex
        pt={{ base: "4rem", md: "3rem" }}
        alignItems="center"
        // fontSize={customStyle.fontSize.logoText}
        ps={{ base: "1.3rem", md: "2rem" }}
        justifyContent="space-between"
        pb={{ base: "2rem", md: "51.5px" }}
        pos="relative"
      >
        <Flex
          display={{ base: "none", md: "flex" }}
          h={"40px"}
          w="120px"
          justify={"center"}
          align="center"
        >
          <Link to={""}>
            <Image src="/assets/images/INVEST.png" h={"50%"} />
          </Link>
        </Flex>
        <HStack columnGap="12px" display={{ base: "flex", md: "none" }}>
          <Avatar boxSize={"60px"} src={""} />
          <VStack lineHeight="1rem" alignItems="flex-start" color="white">
            <Text fontSize="12px" fontWeight="400">
              {/* {user?.fullname} */}
            </Text>
            <Text fontSize="12px" fontWeight="400">
              {/* {user?.email} */}
            </Text>
          </VStack>
        </HStack>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          color="white"
          pos="absolute"
          top="1rem"
          right="1rem"
          onClick={onClose}
        />
      </Flex>
      {typewq === "CUSTOMER" ? (
        <>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              bg={pathName.includes(link.url) ? "teal.900" : "none"}
              color={pathName.includes(link.url) ? "white" : "white"}
              icon={link.icon}
              url={link.url}
              _hover={{
                bg: "teal.900",
                color: "white",
              }}
            >
              {link.name}
            </NavItem>
          ))}
        </>
      ) : (
        <>
          {AdminLinkItems.map((link) => (
            <NavItem
              key={link.name}
              bg={pathName.includes(link.url) ? "teal.900" : "none"}
              color={pathName.includes(link.url) ? "white" : "white"}
              icon={link.icon}
              url={link.url}
              _hover={{
                bg: "teal.900",
                color: "white",
              }}
            >
              {link.name}
            </NavItem>
          ))}
        </>
      )}
      <Flex
        align="center"
        mt={{ base: "3rem", md: "4.5rem" }}
        role="group"
        cursor="pointer"
        h="3.5rem"
        ps="2rem"
        columnGap="14px"
        borderLeftRadius={{ base: "0", md: "24px" }}
        // fontSize={customStyle.fontSize.sideItem}
        _hover={{
          bg: "teal.900",
          color: "white",
        }}
        transition="0.6s"
        onClick={onlogout}
      >
        <Icon
          fontSize="24px"
          _groupHover={{
            color: "white",
          }}
          as={FiLogOut}
        />
        Signout
      </Flex>
      {/* </Link> */}
    </Box>
  );
};

// interface  extends FlexProps {
//   icon: IconType;
//   children: ReactText;
//   url: string;
// }
const NavItem = ({ icon, children, url, ...rest }) => {
  return (
    <Link to={url} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        mt={{ base: "0", md: "1rem" }}
        role="group"
        cursor="pointer"
        h="3.5rem"
        ps={{ base: "1.3rem", md: "2rem" }}
        columnGap={{ base: "10px", md: "14px" }}
        borderLeftRadius={{ base: "0", md: "24px" }}
        borderBottomColor={{ base: "white", md: "none" }}
        borderBottomWidth={{ base: "1px", md: "0" }}
        // fontSize={customStyle.fontSize.sideItem}
        _hover={{
          bg: "white",
          color: "font.main",
        }}
        transition="0.3s"
        {...rest}
      >
        {icon && (
          <Icon
            fontSize={{ base: "1.2rem", md: "1.5rem" }}
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

// interface NavProps extends FlexProps {
//   onOpen: () => void;
// }
// interface PropsNav extends FlexProps {
//   onOpenDrawer: () => void;
// }

const Nav = ({ onOpenDrawer, ...rest }) => {
  // const [notifyData, setNotifyData] = useState<notifyDataDetails[]>();
  // const { user } = useAppSelector((state) => state.Reducers.profile);
  // const { user: notify } = useAppSelector((state) => state.Reducers.notify);
  // const dispatch = useAppDispatch();
  // let code = user ? user.id.toString() : null;

  // useEffect(() => {
  //   try {
  //     const vv = localStorage.getItem("userInfo");
  //     if (vv) {
  //       const gg = JSON.parse(vv);
  //       const id = gg.user.id;
  //       dispatch(getProfile(id));
  //     }
  //     if (notify) {
  //       setNotifyData(notify.data);
  //       let query: LectureQuery = {
  //         id: code,
  //         pageNumber: null,
  //       };

  //       dispatch(notification(query));
  //     }
  //   } catch (error) {
  //     console.log(error as TypeError);
  //   }
  // }, [dispatch, code]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      ml={{ base: 0, md: "260px" }}
      // px={{ base: 4, md: 4 }}
      ps={{ base: "1rem", md: "69px" }}
      pe={{ base: "1rem", md: "74px" }}
      height={{ base: "90px", md: "123px" }}
      alignItems="center"
      justifyContent="space-between"
      bg={"white"}
      boxShadow={{ base: "none", md: "md" }}
      color="font.dark"
      {...rest}
    >
      {/* <NotificationModal isOpen={isOpen} onClose={onClose} data={notifyData!} /> */}
      <Flex
        fontWeight="700"
        color="font.main"
        display={{ base: "flex", md: "none" }}
        columnGap="8px"
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpenDrawer}
          variant="outline"
          aria-label="open menu"
          fontSize="1.2rem"
          border="none"
          color="font.main"
          icon={<FiMenu />}
        />
        <Flex h={"40px"} w="120px" justify={"center"} align="center">
          <Link to={""}>
            <Image src="/assets/images/INVEST.png" h={"50%"} />
          </Link>
        </Flex>
      </Flex>
      <Flex>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          color="font.main"
          border="none"
          fontSize="1.2rem"
          icon={<FiBell />}
        />
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpenDrawer}
          variant="outline"
          border="none"
          aria-label="open menu"
          color="font.main"
          fontSize="1.2rem"
          icon={<BiSearchAlt2 />}
        />

        <Flex
          w={"160px"}
          h="25px"
          pt={"10px"}
          mt="15px"
          bg={""}
          display={{ base: "none", md: "flex" }}
        >
          <Image src="/assets/images/INVEST.png" />
        </Flex>
      </Flex>

      <HStack
        spacing={{ base: "0", md: "13px" }}
        display={{ base: "none", md: "flex" }}
      >
        <IconButton
          h="33px"
          w="30px"
          boxSize="30px"
          fontSize="15px"
          borderRadius="full"
          bg="teal.700"
          color="white"
          variant="outline"
          _hover={{ backgroundColor: "teal.900" }}
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <HStack columnGap="8px">
            <Avatar
              boxSize={"48px"}
              // src={user?.image === " " ? " " : `${user?.image}`}
            />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              w="89px"
            >
              <Text fontSize="12px" fontWeight="600">
                {/* {user?.fullname} */}
              </Text>
            </VStack>
          </HStack>
        </Flex>
      </HStack>
    </Flex>
  );
};
