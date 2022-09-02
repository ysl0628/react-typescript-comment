import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Reply = {
  commentId: string;
  id: string;
  content: string;
  time: string;
};
export type Comment = {
  id: string;
  content: string;
  time: string;
  replies?: Reply[];
};

export type CommentState = {
  comment: Comment[];
};

const initialState: CommentState = {
  // @ts-ignore
  comment: JSON.parse(localStorage.getItem("comments")) || [],
};
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    createComment(state, action: PayloadAction<Comment>) {
      state.comment = [action.payload, ...state.comment];
      localStorage.setItem("comments", JSON.stringify(state.comment));
    },
    createReply(state, action: PayloadAction<Reply>) {
      const replyComment: Comment = state.comment.find((comment) => {
        return comment.id === action.payload.commentId;
      })!;
      Array.isArray(replyComment.replies)
        ? (replyComment.replies = [action.payload, ...replyComment.replies])
        : (replyComment.replies = [action.payload]);
      localStorage.setItem("comments", JSON.stringify(state.comment));
    },
  },
});

export const { createComment, createReply } = commentSlice.actions;
export default commentSlice.reducer;
