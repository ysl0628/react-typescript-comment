import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { createComment } from "../store/reducers/commentSlice";
import uuid from "react-uuid";
import { RootState } from "../store";
import useDate from "../hooks/useDate";

export default function Edit() {
  const [content, setContent] = useState<string>("");
  const dispatch = useAppDispatch();
  const comment = useAppSelector((state: RootState) => state.comment);
  const now = useDate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createComment({ id: uuid(), content: content, time: now }));
    setContent("");
  };

  useEffect(() => {
    console.log(comment);
  }, [comment]);

  return (
    <div className="flex justify-center">
      <div className="flex mx-auto items-center justify-center shadow-lg mt-20 mb-4 max-w-lg">
        <form
          className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
          onSubmit={onSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a new comment
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
              ></textarea>
            </div>
            <div className="w-full md:w-full text-end px-3">
              <div className="-mr-1">
                <button
                  type="submit"
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
