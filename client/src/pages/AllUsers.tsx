import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../config/firebase";
import { getIdToken } from "firebase/auth";

interface userType {
  id: string;
  name: string;
  isAdmin: boolean;
  lastSignIn: string;
}

const AllUsers = () => {
  const [openOptionId, setOpenOptionId] = useState<string | null>(null);
  const [users, setAllUsers] = useState<userType[]>([]);

  const toggleOption = (id: string) => {
    setOpenOptionId((prev) => (prev === id ? null : id));
  };

  const makeAdmin = async () => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/admin/make-user-admin"
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          console.warn("User not signed in yet");
          return;
        }

        const token = await getIdToken(currentUser);

        const { data } = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/auth/get-users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        if (data.success) {
          const formattedUsers = (data.users as any[]).map((user) => ({
            id: user.uid,
            name: user.email,
            isAdmin: user.customClaims?.isAdmin || false,
            lastSignIn: user.metadata.lastSignInTime,
          }));

          setAllUsers(formattedUsers);
          console.log(data)
        }
      } catch (err) {
        console.log(err);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) getAllUsers();
    });

    return () => unsubscribe(); // cleanup
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Users
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="absolute right-4 top-4">
              <IconButton
                aria-label="more options"
                onClick={() => toggleOption(user.id)}
              >
                <MoreVertIcon />
              </IconButton>

              {openOptionId === user.id && (
                <div className="absolute w-max z-20 right-4">
                  <span
                    className="bg-slate-100 p-2 rounded cursor-pointer"
                    onClick={() => makeAdmin()}
                  >
                    Make Admin
                  </span>
                </div>
              )}
            </div>

            <h1 className="font-semibold text-xl text-gray-900 mb-2">
              {user.name}
            </h1>
            <p className="text-gray-700 mb-1">
              <span className="font-medium text-gray-800">isAdmin:</span>{" "}
              <span
                className={user.isAdmin ? "text-green-600" : "text-red-600"}
              >
                {user.isAdmin ? "Yes" : "No"}
              </span>
            </p>
            <p className="text-gray-700">
              <span className="font-medium text-gray-800">Last Signed In:</span>{" "}
              {user.lastSignIn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
