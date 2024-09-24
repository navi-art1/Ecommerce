import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Electronics } from "../Electronics";
import { MenClothing } from "../MenClothing";
import { WomenClothing } from "../WomenClothing";
import { Jewelry } from "../Jewelry"

import "./App.css";

const App = () => {
  return (
    <ShoppingContextProvider>
      <HashRouter>
        <Navbar />
        <Layout>
          <CheckoutSideMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/my-orders" element={<MyOrder />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/electronics" element={<Home />} />
            <Route path="/men-clothing" element={<Home />} />
            <Route path="/women-clothing" element={<Home />} />
            <Route path="/jewelry" element={<Home />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ShoppingContextProvider>
  );
};

export default App;
