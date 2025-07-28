import { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState('Sign Up');

  function handleSwitch() {
    setForm(form == 'Sign Up' ? 'Sign In' : 'Sign Up');
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="form w-[40%] p-10 pt-0 flex flex-col justify-center items-center shadow-2xl rounded-sm">
        <img
          src="https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg"
          alt=""
          className="w-[100px]"
        />
        <form action="" className="flex flex-col w-[90%]">
          {form == 'Sign Up' && (
            <input
              type="text"
              placeholder="Your Name"
              className="px-3 py-3 border-2 border-black rounded-md mb-5"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-3 border-2 border-black rounded-md mb-5"
          />
          <input
            type="password"
            placeholder="******"
            className="px-3 py-3 border-2 border-black rounded-md mb-5"
          />
          {form == 'Sign Up' && (
            <input
              type="password"
              placeholder="******"
              className="px-3 py-3 border-2 border-black rounded-md mb-5"
            />
          )}
          <button className="bg-blue-400 text-black px-3 py-3 text-lg font-bold mb-3 cursor-pointer">
            {form}
          </button>
        </form>
        <p className="text-gray-500">
          {form == 'Sign Up'
            ? 'Already Have Account?'
            : `Don't have an account ?`}
          <span
            className="ml-3 cursor-pointer text-black underline"
            onClick={handleSwitch}
          >
            {form == 'Sign Up' ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
