import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: { name: string; email: string; bio: string };
  isEditing: boolean;
}

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    bio: "",
  },
  isEditing: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string; bio: string }>,
    ) => {
      state.user = action.payload;
      state.isEditing = false;
    },
    toggleEdit: (state) => {
      state.isEditing = !state.isEditing;
    },
    // updateField: (
    //   state,
    //   action: PayloadAction<{ name?: string; email?: string; bio?: string }>,
    // ) => {
    //   state.user = {
    //     name: action.payload.name ? action.payload.name : state.user.name,
    //     email: action.payload.email ? action.payload.email : state.user.email,
    //     bio: action.payload.bio ? action.payload.bio : state.user.bio,
    //   };
    // },
  },
});

export const { setUser, toggleEdit } = userSlice.actions;

export default userSlice.reducer;
