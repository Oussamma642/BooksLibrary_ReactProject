// import React, { useState } from 'react';

// const LoginForm = ({OnSub, UsrExst}) => {

//     const [email, setEmail] = useState('');
//     const [pswd, setPswd] = useState('');

//     const [Display, setDisplay] = useState('none');

//     function handlSubmit(e){
//         e.preventDefault();
//         OnSub(email, pswd);
//         UsrExst === true? setDisplay('none') : setDisplay('flex');
//         console.log(UsrExst);
//         console.log(Display);
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-900">
//             <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold text-center text-gray-200">Login</h2>
//                 <form className="mt-6" onSubmit={handlSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             onChange={(e)=>setEmail(e.target.value)}
//                             className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             onChange={(e)=>setPswd(e.target.value)}
//                             className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
//                         />
//                     </div>
//                     {/* Login Incorrect */}
//                     <div className='flex justify-center' style={{display:Display}} >
//                         <span className="alert alert-danger">Login Incorrect</span>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full px-4 py-2 mt-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
//                     >
//                         Login
//                     </button>
//                 </form>
//                 <p className="mt-6 text-sm text-center text-gray-400">
//                     Don't have an account? <a href="#" className="text-blue-400 hover:underline">Sign up</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;

import React, { useState } from "react";

const LoginForm = ({ onLogin, SetInsc }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
    setError(true); // Assume login failed; App will re-render if login succeeds
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-200">Login</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          {error && (
            <div className="alert alert-danger text-center">
              Incorrect email or password.
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <button
          type="button"
            onClick={() => SetInsc(true)}
            className="text-blue-400 hover:underline bg-transparent border-none p-0 cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
