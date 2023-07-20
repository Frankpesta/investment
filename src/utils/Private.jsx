import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  let token = localStorage.getItem("userInfo");
  let gottenToken = token ? JSON.parse(token) : <Navigate to={"/auth/login"} />;
  let auth = gottenToken?.auth?.access_token;

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={`/auth/login?redirect=${window.location.pathname}`} />
  );
};

export const NoAccessRoute = () => {
  let token = localStorage.getItem("userInfo");
  // console.log(token);

  return token === null ? <Outlet /> : <Navigate to={"/dashboard"} />;
};
