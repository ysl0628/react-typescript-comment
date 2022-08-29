import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comment {
  id: string;
  content: string;
  time: string;
  reply?: string[];
}
export interface CommentState {
  comment: Comment[];
}

const initialState: CommentState = {
  comment: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    postComment(state, action: PayloadAction<Comment>) {
      state.comment = [action.payload, ...state.comment];
    },
  },
});

export const { postComment } = commentSlice.actions;
export default commentSlice.reducer;
