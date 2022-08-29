import React from "react";
import { useAppSelector } from "../hooks/hook";
import { RootState } from "../store";
import Comments from "./Comments";

export default function List() {
  const comments = useAppSelector((state: RootState) => state.comment.comment);

  return (
    <div className="flex flex-col justify-center">
      {comments.map((comment) => {
        return <Comments key={comment.id} id={comment.id} info={comment} />;
      })}
    </div>
  );
}
