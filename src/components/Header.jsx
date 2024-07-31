import { Link } from "react-router-dom";
import logo from "../../src/assest/logo.jpg";
import logo2 from "../../src/assest/logo2.jpg"
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-20 shadow-md bg-white fixed w-full z-40">
      <div className=" h-full container mx-auto flex  items-center px-4 justify-between">
        <div className="font-semibold lg:text-2xl  text-xl   ">
          <Link to={"/"}> 
          <img className="h-20 " src={logo2}  alt="" /></Link>
        </div>

        <div className=" hidden lg:flex items-center w-11/12 mx-auto mt-5 justify-between max-w-sm border border-gray-300 rounded-full focus-within:border-basic pl-4">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-secondary flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        {/* right side  icons */}
        <div className="flex items-center gap-3 lg:gap-6 mr-6">
          <div>
            <FaRegCircleUser className="lg:text-3xl text-xl cursor-pointer " />
          </div>
          <div className="relative  ">
            <span>
              <FaShoppingCart className="lg:text-2xl " />
            </span>
            <div className="bg-basic absolute -top-2 -right-3  text-white  font-semibold rounded-full w-5 h-5 p-1 justify-center flex items-center">
              <p className=" text-sm ">0</p>
            </div>
          </div>

          {/* login -logout */}
          <div>
            <button className="px-4 py-2 rounded-full ml-1 lg:ml-0 hover:bg-[#eaae15]  text-gray-600 font-bold bg-basic  transition duration-400 ease-in-out ">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* this section is for mobile view*/}

      <div className="lg:hidden flex items-center w-11/12 mx-auto mt-5 justify-between max-w-sm border border-gray-300 rounded-full focus-within:border-basic pl-4">
        <input
          type="text"
          placeholder="search product here..."
          className="w-full outline-none"
        />
        <div className="text-lg min-w-[50px] h-8 bg-secondary flex items-center justify-center rounded-r-full text-white">
          <GrSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
