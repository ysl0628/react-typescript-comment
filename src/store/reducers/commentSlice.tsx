import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Reply {
  commentId: string;
  id: string;
  content: string;
  time: string;
}
export interface Comment {
  id: string;
  content: string;
  time: string;
  replies?: Reply[];
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
    createComment(state, action: PayloadAction<Comment>) {
      state.comment = [action.payload, ...state.comment];
    },
    createReply(state, action: PayloadAction<Reply>) {
      const replyComment: Comment = state.comment.find((comment) => {
        return comment.id === action.payload.commentId;
      })!;
      Array.isArray(replyComment.replies)
        ? (replyComment.replies = [action.payload, ...replyComment.replies])
        : (replyComment.replies = [action.payload]);
    },
  },
});

export const { createComment, createReply } = commentSlice.actions;
export default commentSlice.reducer;
