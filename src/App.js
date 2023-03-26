import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./components/utils/UserContext";
import CartContext from "./components/utils/CartContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./components/utils/store";
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "sahil",
    location: "uttrakhand",
  });

  const [item, setItem] = useState([]);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={{ item, setItem }}>
          <Header />
          <Outlet />
          <Footer />
        </CartContext.Provider>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resturant/:id", element: <ResturantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
