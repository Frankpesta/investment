import Home from "../Pages/AuthPages/Home";
import Home2 from "../Pages/AuthPages/Home2";
import AllUsers from "../Pages/AuthPages/AllUser";
import AllDeposit from "../Pages/AuthPages/AllDeposit";
import AllRequests from "../Pages/AuthPages/AllRequest";
import AllWithdrawal from "../Pages/AuthPages/AllWithdrawal";
import Address from "../Pages/AuthPages/Address";
import Profile from "../Pages/AuthPages/Profile";
import Landing from "../Pages/StaticPages/Landing";
import Deposit from "../Pages/AuthPages/Deposit";
import DepositType from "../Pages/AuthPages/DepositType";
import ViewDeposit from "../Pages/AuthPages/ViewDeposit";
import ViewWithdrawal from "../Pages/AuthPages/ViewWithdrawal";
import Referral from "../Pages/AuthPages/Referral";
import EditProfile from "../Pages/AuthPages/EditProfile";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
export const routeObj = {
  login: "/auth/login",
  register: "/auth/register",
  landing: "/home",
  // about: "/about",
  // contact: "/contact",
  // services: "/services",
  // packages: "/packages",
  // faq: "/faqs",
  // security: "/security",
  // forgotPassword: "/auth/forgot-password",
  home: "/dashboard",
  home2: "/admin/dashboard",
  deposit: "/deposit",
  depositytpe: "/deposit/",
  viewdeposit: "/view-deposit",
  viewwithdrawal: "/view-withdrawal",
  profile: "/profile",
  editprofile: "/edit-profile",
  referrer: "/referral",
  allusers: "/all-users",
  alldeposits: "/all-deposits",
  allrequests: "/all-requests",
  allwithdrawals: "/all-withdrawals",
  address: "/address",
  // verifyemail: "/auth/verify-email",
};

export const protectedRoutes = [
  {
    path: routeObj.home,
    component: Home,
  },
  {
    path: routeObj.home2,
    component: Home2,
  },
  {
    path: routeObj.deposit,
    component: Deposit,
  },
  {
    path: `${routeObj.depositytpe}:type`,
    component: DepositType,
  },
  {
    path: `${routeObj.viewdeposit}`,
    component: ViewDeposit,
  },
  {
    path: `${routeObj.viewwithdrawal}`,
    component: ViewWithdrawal,
  },
  {
    path: `${routeObj.profile}`,
    component: Profile,
  },
  {
    path: `${routeObj.editprofile}`,
    component: EditProfile,
  },
  {
    path: `${routeObj.referrer}`,
    component: Referral,
  },
  {
    path: `${routeObj.allusers}`,
    component: AllUsers,
  },
  {
    path: `${routeObj.alldeposits}`,
    component: AllDeposit,
  },
  {
    path: `${routeObj.allrequests}`,
    component: AllRequests,
  },
  {
    path: `${routeObj.allwithdrawals}`,
    component: AllWithdrawal,
  },
  {
    path: `${routeObj.address}`,
    component: Address,
  },
];

// export const homeRoute = [
//   {
//     path: routeObj.landing,
//     component: Landing,
//   },
// ];

export const authRoute = [
  {
    path: routeObj.landing,
    component: Landing,
  },
  //   {
  //     path: `${routeObj.viewblog}:code`,
  //     component: ViewBlog,
  //   },
  //   {
  //     path: routeObj.about,
  //     component: About,
  //   },
  //   {
  //     path: routeObj.contact,
  //     component: Contact,
  //   },
  //   {
  //     path: routeObj.services,
  //     component: Services,
  //   },
    {
      path: routeObj.register,
      component: Register,
    },

    {
      path: routeObj.login,
      component: Login,
    },
  //   {
  //     path: routeObj.packages,
  //     component: Packages,
  //   },
  //   {
  //     path: routeObj.faq,
  //     component: Freqs,
  //   },
  //   {
  //     path: routeObj.security,
  //     component: Security,
  //   },
  //   {
  //     path: routeObj.forgotPassword,
  //     component: ForgotPassword,
  //   },
  //   {
  //     path: routeObj.verifyemail,
  //     component: VerifyEmail,
  //   },
];
