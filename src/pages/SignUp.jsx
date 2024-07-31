import { Link } from "react-router-dom";
import loginIcons from "../../src/asset/signin.gif";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="bg-slate-200 h-full">
      <section id="login">
        <div className="mx-auto container p-4">
          <div className="bg-white p-5 w-full max-w-sm mx-auto">
            {/* text */}
            <div className="flex items-center justify-center">
              <h2 className="text-3xl font-bold text-center border-b-4  w-5/12 border-basic pb-3  ">
                Sign Up
              </h2>
            </div>
            <div className="w-20 h-20 mt-5 rounded-full mx-auto">
              <img src={loginIcons} alt="login icons" />
            </div>

            {/* form start here */}
            <form
              onSubmit={handleSubmit}
              className="pt-6 flex flex-col gap-2"

              // onSubmit={handleSubmit}
            >
              <div className="grid">
                <label>Name : </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    // value={data.email}
                    // onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="grid">
                <label>Email : </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    // value={data.email}
                    // onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label>Password : </label>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    // value={data.password}
                    name="password"
                    // onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowPassword((pre) => !pre)}
                  >
                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                  </div>
                </div>
                {/* confirm password */}
              </div>
              <div>
                <label>Confirm Password : </label>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    // value={data.password}
                    // name="password"
                    // onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowPassword((pre) => !pre)}
                  >
                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                  </div>
                </div>
              </div>

              <button className="bg-basic font-semibold hover:bg-yellow-500 text-white px-6 py-2 w-6/12   rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                Sign Up
              </button>
            </form>

            <p className="my-5">
              Already have an account ?{" "}
              <Link
                to={"/login"}
                className=" text-red-600 hover:text-red-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
