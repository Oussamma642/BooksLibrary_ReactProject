import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({
  UserInofs,
  setConnectedUser,
  setIsLoggedIn,
}) {
  const [fname, setFname] = useState(UserInofs.fname);
  const [lname, setLname] = useState(UserInofs.lname);
  const [email, setEmail] = useState(UserInofs.email);
  const [pswd, setPswd] = useState(UserInofs.pswd);

  const Navigate = useNavigate();

// ------------------- Async functions
// ---------Update
  async function UpdateUser(userID) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/bookuser/${userID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            pswd: pswd,
            fname: fname,
            lname: lname,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();

      alert("User updated successfully!");

      Navigate("/");
    } catch (error) {
      // Show error alert
      alert("An error occurred while updating the user: " + error.message);
      console.error("Error:", error);
    }
  }

// ---------Delete
  async function deleteUser(userID) {
    try {
      const response = await fetch(`http://localhost:3000/api/bookuser/${userID}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      
    console.log(userID);

      alert('User deleted successfully!');
    } catch (error) {
      alert('An error occurred while deleting the user: ' + error.message);
      console.error('Error:', error);
    }
  }
  

  // Modify User
  function handleSaveChanges() {
    setConnectedUser({
      email: email,
      pswd: pswd,
      fname: fname,
      lname: lname,
    });

    UpdateUser(UserInofs.id);
  }

  // Logout
  function handleLogOut() {
    setConnectedUser({});
    setIsLoggedIn(false);
    Navigate("/");
  }

  // Delete Account
  function handleDelete() {
    console.log(UserInofs.id);
    deleteUser(UserInofs.id);
    setConnectedUser({});
    setIsLoggedIn(false);
    Navigate("/");
  }

  return (
    <div className="container mx-auto mt-5 flex flex-col">
      <div className="flex flex-col gap-5">
        {/* Profile Picture */}
        <div>
          <img
            src="LibraryProject/ProfileIcon/img2.jpg"
            className="rounded-full bg-slate-100 w-24 h-24 mx-auto"
          />
        </div>

        <hr style={{ backgroundColor: "white", height: "2px" }} />

        {/* Personal Infos */}

        {/* Titles */}
        <div className="flex flex-row justify-around text-teal-400">
          <div className="flex flex-col ">
            <h4>First Name</h4>

            <hr style={{ backgroundColor: "white", height: "2px" }} />
            <h4>Last Name</h4>

            <hr style={{ backgroundColor: "white", height: "2px" }} />
            <h4>Email</h4>

            <hr style={{ backgroundColor: "white", height: "2px" }} />
            <h4>Password</h4>
          </div>

          {/* Inputs */}
          <div className="flex flex-col">
            {/* Fname */}
            <input
              value={fname}
              required
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => setFname(e.target.value)}
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />

            <hr style={{ backgroundColor: "white", height: "2px" }} />

            {/* Lname */}
            <input
              value={lname}
              required
              type="text"
              id="lname"
              name="lname"
              onChange={(e) => setLname(e.target.value)}
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
            <hr style={{ backgroundColor: "white", height: "2px" }} />

            {/* Email */}
            <input
              value={email}
              required
              type="email"
              id="lname"
              name="lname"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />

            <hr style={{ backgroundColor: "white", height: "2px" }} />

            {/* Pswd */}
            <input
              value={pswd}
              required
              type="text"
              id="pswd"
              name="pswd"
              onChange={(e) => setPswd(e.target.value)}
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>

        <hr style={{ backgroundColor: "white", height: "2px" }} />

        {/* Buttons */}

        <div className="flex flex-col gap-4 mx-auto mb-10 w-1/2">
          {/* Save Button */}
          <button
            className="btn btn-outline-primary"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>

          {/* Logout Button */}
          <button className="btn btn-outline-danger" onClick={handleLogOut}>
            Logout
          </button>

          {/* Delete Button */}
          <button className="btn btn-outline-danger" onClick={handleDelete}>Delete Account</button>
        </div>
      </div>
    </div>
  );
}
