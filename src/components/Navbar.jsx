import { FaSearch, FaRegHeart } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className="flex gap-5 p-4 py-2 items-center bg-[#EFF1F3] ">
      <img
        className="w-[50px] cursor-pointer"
        src="https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg"
        alt="Logo"
      />
      <select
        name=""
        id=""
        className="bg-white border-2 border-black pl-4 pr-[14%] py-3 rounded-sm"
      >
        <option value="India">India</option>
      </select>
      <div className="search-box flex justify-center items-center">
        <input
          type="text"
          className="bg-white border-2 border-black py-3 px-2 w-[500px] rounded-l-sm"
          placeholder="Find Cars,Mobiles Phones and more..."
        />
        <div className="h-[52px] w-[52px] bg-black flex justify-center items-center border-y-2 border-r-2 border-black rounded-r-sm">
          <FaSearch color="white" />
        </div>
      </div>
      <select name="" id="" className="cursor-pointer font-semibold text-md">
        <option value="English">ENGLISH</option>
      </select>
      <FaRegHeart className="font-bold text-2xl cursor-pointer" />
      <p className="cursor-pointer font-bold underline">Login</p>
      <button className="cursor-pointer w-32 h-12 border-4 border-l-amber-300 border-t-blue-400 border-r-black border-b-green-400 rounded-full flex items-center justify-center">
        <span className="font-extrabold text-[30px] pb-1">+</span>
        <span className="font-bold text-[16px]">SELL</span>
      </button>
    </div>
  );
};

export default Navbar;
