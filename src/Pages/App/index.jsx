import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { Navbar } from "../../Components/Navbar";
import { Layout } from "../../Components/Layout";
import { ShoppingContextProvider } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

import "./App.css";

const App = () => {
  return (
    <ShoppingContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <CheckoutSideMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/my-orders/last" element={<MyOrder />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ShoppingContextProvider>
  );
};

export default App;
