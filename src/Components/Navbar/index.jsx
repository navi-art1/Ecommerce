import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingContext);
  const activeStyle =
    "underline underline-offset-8 thick-underline font-semibold";

  return (
    <nav className="flex justify-between items-center bg-[#1f2a3c] fixed top-0 z-10 w-full py-5 px-8 text-sm font-light ">
      <ul className="flex items-center gap-4">
        <li className="font-bold text-lg ">
          <NavLink to="/"  
          onClick={() => context.setSearchByCategory('')}
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >DevMarket</NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory('')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/men-clothing"
            onClick={() => context.setSearchByCategory('men\'s clothing')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men Clothing
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/women-clothing"
            onClick={() => context.setSearchByCategory('women\'s clothing')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women Clothing
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/jewelry"
            onClick={() => context.setSearchByCategory('jewelery')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelry
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-4">
        <li className="/75">Joel@uni.pe</li>

        <li>
          <NavLink
            to={"/my-orders"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/my-account"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/sign-in"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/furnitures"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <i className="fa-solid fa-cart-shopping"></i>&nbsp;{context.count}
          </NavLink>
        </li>

        <li>
          <NavLink to={"/as"}>
            <img src="https://assets-prd.ignimgs.com/2024/05/02/elder-scrolls-skyrim-button-2017-1629409446732-1714671148445.jpg?crop=1%3A1&width=256" className="h-8 w-8 rounded-full" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
