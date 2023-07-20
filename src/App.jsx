import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { protectedRoutes, authRoute } from "./constants/routes";
import theme from "./utils/style";
import { store } from "./app/store";
import { ProtectedRoute, NoAccessRoute } from "./utils/Private";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router>
          <Routes>
            <Route path={"/"} element={<Navigate to={"/home"} />} />
            <Route element={<NoAccessRoute />}>
              {authRoute.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                ></Route>
              ))}
            </Route>

            <Route element={<ProtectedRoute />}>
              {protectedRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                ></Route>
              ))}
            </Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
