import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setUser, toggleEdit } from "../slices/userSlice";
import React, { useState } from "react";

export function UserForm() {
  const isEditing = useSelector((state: RootState) => state.user.isEditing);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          User Form
        </h1>

        <div className="flex items-center justify-center mb-8">
          <label className="flex items-center gap-3 text-slate-700 font-medium cursor-pointer">
            <input
              onChange={() => dispatch(toggleEdit())}
              type="checkbox"
              className="h-5 w-5 accent-blue-600"
            />
            <span>{isEditing ? "Edit Mode" : "View Mode"}</span>
          </label>
        </div>

        <div className="space-y-6">
          <label className="block">
            <span className="block mb-2 text-sm font-medium text-slate-700">
              Name
            </span>

            <input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              disabled={!isEditing}
              type="text"
              placeholder="Enter Name"
              className={`w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isEditing && "bg-gray-300"}`}
            />
          </label>

          <label className="block">
            <span className="block mb-2 text-sm font-medium text-slate-700">
              Email
            </span>

            <input
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              disabled={!isEditing}
              type="email"
              placeholder="Enter Email"
              className={`w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isEditing && "bg-gray-300"}`}
            />
          </label>

          <label className="block">
            <span className="block mb-2 text-sm font-medium text-slate-700">
              Bio
            </span>

            <textarea
              value={bio}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setBio(e.target.value)
              }
              disabled={!isEditing}
              placeholder="Enter Bio"
              rows={4}
              className={`w-full px-4 py-3 border border-slate-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${!isEditing && "bg-gray-300"}`}
            />
          </label>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => {
              setName(user.name);
              setEmail(user.email);
              setBio(user.bio);
              dispatch(toggleEdit()); // exit edit mode
            }}
            className="px-5 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition"
          >
            Cancel
          </button>

          <button
            onClick={() =>
              dispatch(setUser({ name: name, email: email, bio: bio }))
            }
            disabled={!isEditing}
            className={`px-5 py-2.5 ${isEditing ? "bg-blue-600" : "bg-blue-400"} text-white rounded-lg ${isEditing && "hover:bg-blue-700"} transition`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
