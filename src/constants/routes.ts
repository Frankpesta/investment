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
import UsersProfit from "../Pages/AuthPages/UsersProfit";
import About from '../Pages/StaticPages/About';
import Packages from '../Pages/StaticPages/Packages';
import Services from '../Pages/StaticPages/Services';
import Security from '../Pages/StaticPages/Security';
import Insights from '../Pages/StaticPages/Insights';
import Faqs from '../Pages/StaticPages/Faqs';
import Contact from '../Pages/StaticPages/Contact';
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";
export const routeObj = {
  insights: '/insights',
  login: "/auth/login",
  register: "/auth/register",
  landing: "/home",
  about: "/about",
  contact: "/contact",
  terms: "/terms",
  privacy: '/privacy',
  services: "/services",
  packages: "/packages",
  faq: "/faqs",
  security: "/insights",
  forgotPassword: "/auth/forgot-password",
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
  usersprofit: "/users-profit",
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
  {
    path: `${routeObj.usersprofit}`,
    component: UsersProfit,
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
     {
      path: routeObj.about,
      component: About,
    },
    {
      path: routeObj.terms,
      component: Terms,
    },
    {
      path: routeObj.privacy,
      component: Privacy,
    },
    {
      path: routeObj.contact,
      component: Contact,
    },
    {
      path: routeObj.services,
      component: Services,
    },
  {
    path: routeObj.register,
    component: Register,
  },

  {
    path: routeObj.login,
    component: Login,
  },
    {
      path: routeObj.packages,
      component: Packages,
    },
    {
      path: routeObj.faq,
      component: Faqs,
    },
    {
      path: routeObj.insights,
      component: Insights,
    },
  //   {
  //     path: routeObj.forgotPassword,
  //     component: ForgotPassword,
  //   },
  //   {
  //     path: routeObj.verifyemail,
  //     component: VerifyEmail,
  //   },
];
