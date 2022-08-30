import React from "react";
import { Reply } from "../store/reducers/commentSlice";
interface PropType {
  replies: Reply | any;
}

export default function ReplyItem({ replies }: PropType) {
  return (
    <div className="w-full md:w-full px-3 mb-2 mt-2">
      <div className=" rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium focus:outline-none focus:bg-white">
        {replies.content}
      </div>
      <div className="flex items-start w-1/2 text-gray-700 mr-auto">
        <p className="text-xs md:text-sm pt-px align-middle">
          Time: {replies.time}
        </p>
      </div>
    </div>
  );
}
