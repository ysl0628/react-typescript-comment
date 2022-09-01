type PropType = {
  reply: {
    commentId: string;
    id: string;
    content: string;
    time: string;
  };
};

export default function ReplyItem({ reply }: PropType) {
  return (
    <div className="w-full md:w-full px-3 text-start mb-2 mt-2">
      <div
        className="border-b border-gray-400 leading-normal
       resize-none w-full md:w-full pb-2 pt-1 font-medium break-words
         focus:outline-none focus:bg-white"
      >
        {reply.content.split("\n").map((item) => {
          return (
            <span>
              {item}
              <br />
            </span>
          );
        })}
      </div>
      <div className="flex items-start w-1/2 text-gray-700 mt-2 mr-auto">
        <p className="text-xs md:text-sm pt-px align-middle">
          Time: {reply.time}
        </p>
      </div>
    </div>
  );
}
