import { useState } from "react";

export default function InscriptionForm({ SetInsc, Users }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState(false);

  async function addUser() {
    const user = {
      email: email,
      pswd: password,
      fname:fname,
      lname:lname
    };

    try {
      const response = await fetch("http://localhost:3000/api/bookuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log("User added successfully!");
      } else {
        console.error("Failed to add the user.");
      }
    } catch (error) {
      console.error("Error while adding The user", error);
    }
  }

  function handleSubmit(e) {

    e.preventDefault();
    let emailExist = Users.some((elt) => elt.email === email);

    if (
      emailExist ||
      (password !== "" && password2 != "" && password !== password2)
    ) {
      setError(true);
    } 
    
    else {
      addUser();
      alert("User Added successfully");
      SetInsc(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-200">
          Inscription
        </h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* --------------------- Fname */}
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400"
            >
              First Name
            </label>
            <input
              required
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* ------------------Lanme */}
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-400"
            >
              Last Name
            </label>
            <input
              required
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          {/* ------------------------ */}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              required
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
              required
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password2"
              className="block text-sm font-medium text-gray-400"
            >
              Tap The Password Again
            </label>
            <input
              required
              type="password"
              id="password2"
              name="password2"
              placeholder="Enter your password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="alert alert-danger text-center">
              Unmatched Password OR the email you entered is already exist!
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Sing Up
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => SetInsc(false)}
            className="text-blue-400 hover:underline bg-transparent border-none p-0 cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
