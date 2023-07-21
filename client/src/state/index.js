import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  token: null,
  questions: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    // setPost: (state, action) => {
    //   const updatedPosts = state.posts.map((post) => {
    //     if (post._id === action.payload.post_id) {
    //       return action.payload.post;
    //     } else {
    //       return post;
    //     }
    //   });
    //   state.posts = updatedPosts;
    // },
  },
});
export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
