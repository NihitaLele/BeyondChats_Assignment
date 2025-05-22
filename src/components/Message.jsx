import React from "react";

const MessageBubble = ({ text, type, time, seen, avatar }) => {
  const isUser = type === "user";

  return (
    <div
      className={`flex items-end mb-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && avatar && (
        <img
          src={avatar}
          alt="avatar"
          className="w-6 h-6 rounded-full mr-2 object-cover"
        />
      )}

      <div className="max-w-xs">
        <div
          className={`p-3 rounded-lg text-sm ${
            isUser
              ? "bg-[#d3dcf5] text-gray-800 rounded-br-none"
              : "bg-gray-100 text-gray-800 rounded-bl-none"
          }`}
        >
          {text}
        </div>
        <div
          className={`text-[10px] mt-1 text-gray-500 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {isUser && seen ? "Seen • " : ""}
          {time}
        </div>
      </div>

      {isUser && avatar && (
        <img
          src={avatar}
          alt="avatar"
          className="w-6 h-6 rounded-full ml-2 object-cover"
        />
      )}
    </div>
  );
};

export default MessageBubble;
