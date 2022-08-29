import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import useDate from "../hooks/useDate";
import { postReply } from "../store/reducers/commentSlice";
import ReplyItem from "./ReplyItem";

interface PropType {
  commentId: string;
  comment: Comment | any;
}

export default function Reply({ commentId, comment }: PropType) {
  const [replyContent, setReplyContent] = useState<string>("");
  const dispatch = useAppDispatch();
  const now = useDate();
  useEffect(() => console.log(comment.replies), [comment]);

  return (
    <div className="w-full md:w-full flex flex-col items-start pl-4">
      {comment.replies && (
        <ReplyItem key={comment?.replies?.id} replies={comment.replies} />
      )}
      <div className="w-full md:w-full px-3 mb-2 mt-2">
        <textarea
          className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          name="body"
          placeholder="Type Your Reply"
          onChange={(e) => setReplyContent(e.target.value)}
          value={replyContent}
          required
        ></textarea>
      </div>
      <div className="w-full md:w-full text-end px-3">
        <button
          type="button"
          className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide hover:bg-gray-100"
          onClick={() => {
            dispatch(
              postReply({
                commentId: commentId,
                id: uuid(),
                content: replyContent,
                time: now,
              })
            );
            setReplyContent("");
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}
