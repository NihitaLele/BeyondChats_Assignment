import React, { useState } from "react";
import MessageBubble from "./Message";

import { FaBolt, FaRegBookmark, FaSmile, FaChevronDown } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";

const initialMessages = [
  {
    id: 1,
    text: "I bought a product from your store in November as a Christmas gift for a member of my family",
    type: "client",
    time: "1min",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08-ZB6VS6pj8yDzi0m5ib8KPfHx3X91kOClfRp-5BlfEKmU9eLveIcTFuOZ_HKHlVqJA&usqp=CAU",
  },
  {
    id: 2,
    text: "Let me just look into this for you, Luis.",
    type: "user",
    time: "1min",
    seen: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const ChatWindow = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        type: "user",
        time: "Just now",
        seen: false,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full px-4 relative bg-white">
      {/* Header */}
      <div className="flex justify-between py-2">
        <h2 className="text-[20px] font-semibold">Luis Easton</h2>
        <div className="flex items-center space-x-4">
          <FiMoreHorizontal className="cursor-pointer text-xl bg-gray-200 rounded-sm" />
          <GiNightSleep className="cursor-pointer p-0.5 text-xl bg-gray-200 rounded-sm" />
          <MdClose size={16} className="cursor-pointer" />
          <button className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm flex items-center gap-1">
            <MdClose size={15} />
            Close
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mt-4 space-y-2 pb-32">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} {...msg} />
        ))}
      </div>

      {/* Input Section */}
      <div className="absolute bottom-0 left-0 w-full px-4 pb-3 bg-white">
        <div className="rounded-md px-4 py-3 shadow-md bg-white">
          <div className="flex items-center gap-1 text-sm text-gray-800 mb-2">
            <BsChatLeftTextFill className="text-base" />
            <span className="font-medium">Chat</span>
            <FaChevronDown className="text-xs" />
          </div>

          <textarea
            placeholder="Use ⌘K for shortcuts"
            className="h-[60px] w-full text-sm resize-none overflow-hidden whitespace-pre-wrap rounded-md outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />

          {/* Send button and other buttons */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-3 text-gray-800">
              <FaBolt />
              <div className="w-[1.5px] h-4 bg-gray-400"></div>
              <FaRegBookmark />
              <FaSmile />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSend}
                className="text-gray-500 text-sm font-semibold   hover:text-gray-800"
              >
                Send
              </button>
              <div className="w-[1.5px] h-4 bg-gray-400"></div>
              <FaChevronDown className="text-gray-400 text-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
