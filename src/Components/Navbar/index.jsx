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
          <NavLink to="/">Shopi</NavLink>
        </li>

        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            style={({ isActive }) =>
              isActive ? { textDecorationThickness: "1.5px" } : {}
            }
          >
            All
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/men-clothing"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men Clothing
          </NavLink>
        </li>


        <li>
          <NavLink
            to={"/women-clothing"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women Clothing
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/electronics"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>



        <li>
          <NavLink
            to={"/jewelry"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewerly
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
            <img src="/public/foto3.png" className="h-8 w-8 rounded-full" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
