import { Input } from './Login/Input';

import { MdAddAPhoto } from 'react-icons/md';

const Sell = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-10 pt-5">
      <form
        action=""
        className="p-5 w-[50%] h-full flex flex-col rounded-lg shadow-2xl"
      >
        <h1 className="text-center font-bold text-2xl mb-2">
          Create a Product to Sell
        </h1>
        <input
          type="text"
          placeholder="Product Name"
          className="px-2 py-3 border-1 border-black rounded-sm mt-5 w-[80%] mx-auto"
        />
        <input
          type="number"
          placeholder="Price"
          className="px-2 py-3 border-1 border-black rounded-sm mt-5 w-[80%] mx-auto"
        />
        <textarea
          rows="4"
          placeholder="Enter a Short Description"
          className="px-2 py-3 border-1 border-black rounded-sm mt-5 w-[80%] mx-auto"
        ></textarea>
        <input
          type="text"
          placeholder="Address"
          className="px-2 py-3 border-1 border-black rounded-sm mt-5 w-[80%] mx-auto"
        />
        <div className="file flex gap-2 w-[80%] mx-auto mt-5 items-center justify-center">
          <label
            htmlFor="file-upload"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-700 transition"
          >
            <MdAddAPhoto className="text-xl" />
            <span>Upload </span>
          </label>
          <input id="file-upload" type="file" className="" />
        </div>
        <button className="px-2 py-3 bg-green-400 text-black mt-4 w-[80%] mx-auto rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
