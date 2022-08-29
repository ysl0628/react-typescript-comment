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
// { id: "", time: "now", content: "good", replies: [] }
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    postComment(state, action: PayloadAction<Comment>) {
      state.comment = [action.payload, ...state.comment];
    },
    postReply(state, action: PayloadAction<Reply>) {
      const replyComment: any = state.comment.find((comment, index) => {
        return comment.id === action.payload.commentId;
      });
      replyComment.replies = action.payload;
      //   const length = Object.keys(reply).length;
      //   if (!replyComment) return;
      //   if (typeof commentIndex === number) {
      //     state.comment[commentIndex].replies = action.payload;
      //   }
    },
  },
});

export const { postComment, postReply } = commentSlice.actions;
export default commentSlice.reducer;
