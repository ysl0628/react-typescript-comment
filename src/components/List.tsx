import React from "react";
import { useAppSelector } from "../hooks/hook";
import { RootState } from "../store";
import Comments from "./Comments";

export default function List() {
  const comments = useAppSelector((state: RootState) => state.comment.comment);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex mx-auto justify-start mt-8 max-w-lg">
        <h1 className="md:text-2xl text-2xl font-bold pt-px text-orange-700 ">
          Comments
        </h1>
      </div>
      {comments.map((comment) => {
        return <Comments key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
