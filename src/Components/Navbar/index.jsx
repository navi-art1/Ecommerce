import { NavLink } from "react-router-dom";

const Navbar = () => {

  const activeStyle = "underline underline-offset-4"; 

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink 
          to="/"
         
          
          
          >Shopi</NavLink>



        </li>

        <li>
          <NavLink 
          to={"/"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >ALL</NavLink>
        </li>

        <li>
          <NavLink 
          to={"/clothes"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >Clothes</NavLink>
        </li>

        <li>
          <NavLink 
          to={"/electrinics"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >Electronics</NavLink>
        </li>

        <li>
          <NavLink 
          to={"/furnitures"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >Furnitures</NavLink>
        </li>

        <li>
          <NavLink 
          to={"/toys"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >Toys</NavLink>
        </li>

        <li>
          <NavLink 
          to={"/others"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >Others</NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-4">
        <li className="text-black/75">
          Joel@uni.pe
        </li>

        <li>
          <NavLink 
          to={"/my-orders"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >My Orders</NavLink>
        </li>

        <li>
          <NavLink 
          to={"/my-account"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >My Account</NavLink>
        </li>

        <li>
          <NavLink 
          to={"/sign-in"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >Sign In</NavLink>
        </li>

        <li>
          <NavLink 
          to={"/furnitures"}
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >🚮0</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export { Navbar };
