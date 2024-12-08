
const JoinUs = () => {
    return(
        <div>
             {/* Logo Section */}
        <div className="flex justify-center my-8">
          <img
            src="/images/Frame (2).png" 
            alt="Logo"
            className="h-17 w-374" 
          />
        </div>
            <h1 className="text-center text-2xl font-bold mt-4">
                BECOME A NIKE MEMBER
            </h1>
            <p className="text-[#8D8D8D] text-center mt-4 text-sm max-w-xl mx-auto">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
            </p>
            <div className="flex flex-col justify-center w-324 h-561 mx-auto px-80 pt-210 space-y-6 font-[sans-serif] text-[#333]">
            <div>
            <label className="mb-2 text-lg block"></label>
            <input
               type="text"
               placeholder="Email address"
               className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>
            <div>
            <label className="mb-2 text-base block"></label>
            <input
                  type="text"
                  placeholder="Password"
                  className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>
            <div>
            <label className="mb-2 text-sm block"></label>
            <input
                 type="text"
                 placeholder="First Name"
                 className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>
            <div>
            <label className="mb-2 text-sm block"></label>
            <input
                 type="text"
                 placeholder="Last Name"
                 className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>
            <div>
            <label className="mb-2 text-sm block"></label>
            <input
                 type="text"
                 placeholder="Date of Birth"
                 className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>
            <p className="text-[#8D8D8D] text-center mt-4 text-sm max-w-xl mx-auto">
            Get a Nike Member Reward every year on your Birthday.
            </p>
            <div>
            <label className="mb-2 text-sm block"></label>
            <select className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500">
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
            </select>
            </div>
            <div className="flex gap-5">
                <label className="w-153.89 h-43 "></label>
                <input
                     type="text"
                     placeholder="Male"
                     className="px-4 py-1.5 rounded-md bg-white border border-gray-400 outline-blue-500"
                />
                <label className="w-153.89 h-43 "></label>
                <input
                     type="text"
                     placeholder="Female"
                     className="px-4 py-1.5 rounded-md bg-white border border-gray-400 outline-blue-500"
                />
            </div>
            <div className="flex">
            <input type="checkbox" className="w-4" />
            <label className="text-sm ml-4 text-[#8D8D8D] ">Sign up for emails to get updates from Nike on products, offers and your Member benefits</label>
          </div>
          <div>
          <p className="text-[#8D8D8D] w-279 h-30">
          By logging in, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use</u>.
          </p>
          </div>
          <div className="flex flex-col items-center mt-10">
          <button
            type="button"
            className="w-80 h-10 bg-black text-sm text-white hover:bg-gray-800 rounded-sm mb-5">
            JOIN US
          </button>
          <div className="text-[#8D8D8D]">
          <p>
          Already a Member? <b className="text-black">Sign In</b>.
          </p>
          </div>
          </div>

        </div>
        </div>
    )
};

export default JoinUs;
