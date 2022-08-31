import React from "react";
import { Reply } from "../store/reducers/commentSlice";
interface PropType {
  replies: Reply | any;
}

export default function ReplyItem({ replies }: PropType) {
  return (
    <div className="w-full md:w-full px-3 text-start mb-2 mt-2">
      <div
        className="border-b border-gray-400 leading-normal
       resize-none w-full md:w-full pb-2 pt-1 font-medium break-words
         focus:outline-none focus:bg-white"
      >
        {replies.content}
      </div>
      <div className="flex items-start w-1/2 text-gray-700 mt-2 mr-auto">
        <p className="text-xs md:text-sm pt-px align-middle">
          Time: {replies.time}
        </p>
      </div>
    </div>
  );
}
