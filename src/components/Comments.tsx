import React, { useState } from "react";
import { Comment } from "../store/reducers/commentSlice";
import Replies from "./Replies";

type PropType = {
  comment: Comment;
};

export default function Comments({ comment }: PropType) {
  const [reply, setReply] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div className="flex mx-auto items-center justify-center shadow-lg mt-8 mb-4 max-w-lg">
        <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              ID: {comment.id}
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <div className="rounded border border-gray-300 leading-normal resize-none w-full max-h-20 py-2 px-3 font-medium overflow-y-auto focus:outline-none focus:bg-white">
                {comment.content.split("\n").map((item, index) => {
                  return (
                    <span key={"_" + index}>
                      {item}
                      <br />
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="w-full md:w-full flex items-start px-3">
              <div className="flex items-start w-1/2 text-gray-700 mr-auto">
                <p className="text-xs md:text-sm pt-px align-middle">
                  Time: {comment.time}
                </p>
              </div>
              <div className="-mr-1">
                <button
                  type="button"
                  className="bg-white text-gray-700 font-medium py-1 px-4  border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  onClick={() => setReply((pre) => !pre)}
                >
                  {reply ? "Hide" : "Reply"}
                </button>
              </div>
            </div>
            {reply && <Replies commentId={comment.id} comment={comment} />}
          </div>
        </form>
      </div>
    </div>
  );
}
