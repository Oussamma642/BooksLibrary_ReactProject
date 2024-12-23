import { useState } from "react";

export default function Profile({ UserInofs }) {
  const [fname, setFname] = useState(UserInofs.fname);
  const [lname, setLname] = useState(UserInofs.lname);
  const [email, setEmail] = useState(UserInofs.email);
  const [pswd, setPswd] = useState(UserInofs.pswd);

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
              onChange={(e)=>setFname(e.target.value)}
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
              onChange={(e)=>setLname(e.target.value)}
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
            <hr style={{ backgroundColor: "white", height: "2px" }} />

            {/* Email */}
            <input
              value={email}
              required
              type="text"
              id="lname"
              name="lname"
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPswd(e.target.value)}
              className="w-full px-4 py-2 text-gray-200 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>

        <hr style={{ backgroundColor: "white", height: "2px" }} />

        {/* Buttons */}
        
        {/* Save Button */}
        <div className="flex flex-col gap-4 mx-auto mb-10 w-1/2">
          <button className="btn btn-outline-primary ">Save Changes</button>
          <button className="btn btn-outline-danger ">Logout</button>
          <button className="btn btn-outline-danger ">Delete Account</button>  
        </div>
      


      </div>
    </div>
  );
}
