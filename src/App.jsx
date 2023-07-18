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

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router>
          <Routes>
            <Route path={"/"} element={<Navigate to={"/home"} />} />
            <Route>
              {authRoute.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                ></Route>
              ))}
            </Route>

            <Route>
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
