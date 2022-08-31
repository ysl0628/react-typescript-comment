import moment from "moment";
import { useState } from "react";
import uuid from "react-uuid";
import { useAppDispatch } from "../hooks/hook";
import useDate from "../hooks/useDate";
import { createReply, Reply } from "../store/reducers/commentSlice";
import ReplyItem from "./ReplyItem";

type PropType = {
  commentId: string;
  comment: {
    id: string;
    content: string;
    time: string;
    replies?: Reply[];
  };
};

export default function Replies({ commentId, comment }: PropType) {
  const [replyContent, setReplyContent] = useState<string>("");
  const dispatch = useAppDispatch();
  // const createAt = useDate();
  const now = moment().local().format("YYYY/MM/DD h:mm:ss a");

  return (
    <div className="w-full md:w-full flex flex-col items-start pl-5">
      <div className="w-full md:w-full pl-5 pr-3 mb-2 mt-2">
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
              createReply({
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
        {comment.replies && (
          <div>
            <h1 className="text-start text-lg px-3 py-1 font-bold text-orange-700">
              Reply
            </h1>
            {comment.replies.map((reply) => (
              <ReplyItem key={reply.id} replies={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
