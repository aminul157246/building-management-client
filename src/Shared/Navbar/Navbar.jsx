import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/images/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvieder/AuthProvider";


 

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  

  return (
    <div>
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2  rounded-3xl w-52">
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/apartment'}>Apartment</NavLink></li>
              <li><NavLink to={'/login'}>Login </NavLink></li>

              
            </ul>
          </div>
          <a className="normal-case text-xl">Building Management </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/apartment'}>Apartment</NavLink></li>
              <li><NavLink to={'/login'}>Login </NavLink></li>
              
          </ul>

 
        </div>
        <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt='' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
      </div>
    </div>
  );
};

export default Navbar;