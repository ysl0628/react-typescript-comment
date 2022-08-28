import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentState {
  comment: [
    {
      id: string;
      content: string;
      time: string;
      reply?: string[];
    }
  ];
}

const initialState: CommentState = {
  comment: [
    {
      id: "",
      content: "",
      time: "",
      reply: [],
    },
  ],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    postComment(state, action: PayloadAction<string>) {
      //   state.comment.content = action.payload;
      console.log(action.payload);
    },
  },
});

export const { postComment } = commentSlice.actions;
export default commentSlice.reducer;
