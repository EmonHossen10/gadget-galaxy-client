import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-slate-200 h-screen">
      <section id="login">
        <div className="mx-auto container p-4">
          <div className="bg-white p-5 w-full max-w-sm mx-auto">
            {/* text */}
            <div className="flex items-center justify-center">
              <h2 className="text-3xl font-bold text-center border-b-4  w-5/12 border-basic pb-3  ">
                Login
              </h2>
            </div>
            <div className="w-20 h-20 mx-auto">
              {/* <img src={loginIcons} alt='login icons'/> */}
            </div>

            {/* form start here */}
            <form
              className="pt-6 flex flex-col gap-2"

              // onSubmit={handleSubmit}
            >
              <div className="grid">
                <label>Email : </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="email"
                    placeholder="enter email"
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
                    // type={showPassword ? "text" : "password"}
                    placeholder="enter password"
                    // value={data.password}
                    name="password"
                    // onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                  {/* <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div> */}
                </div>
                {/* <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link> */}
              </div>

              <button className="bg-basic font-semibold hover:bg-yellow-500 text-white px-6 py-2 w-6/12   rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                Login
              </button>
            </form>

            <p className="my-5">
              Don't have account ?{" "}
              <Link
                to={"/sign-up"}
                className=" text-red-600 hover:text-red-700 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
