import React from "react";
import { TbLayoutSidebarRight } from "react-icons/tb";

//mock chats
const chats = [
  {
    id: 1,
    name: "Luis · Github",
    message: "Hey! I have a question, let me know when you are free",
    time: "45m",
    active: true,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08-ZB6VS6pj8yDzi0m5ib8KPfHx3X91kOClfRp-5BlfEKmU9eLveIcTFuOZ_HKHlVqJA&usqp=CAU",
  },
  {
    id: 2,
    name: "Ivan · Nike",
    message: "Hi there, I have a question, can You please help me ",
    time: "30m",
    active: false,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwl1PUMIdJhZa414w7RqqIjin14PSyt3n78nmjbd_CPeWMAKSO88rVzvgzA5Z05fqJKuU&usqp=CAU",
  },
  {
    id: 3,
    name: "Lead from New York",
    message: "Good morning, can you update me with the project info",
    time: "40m",
    active: false,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08-ZB6VS6pj8yDzi0m5ib8KPfHx3X91kOClfRp-5BlfEKmU9eLveIcTFuOZ_HKHlVqJA&usqp=CAU",
  },
  {
    id: 4,
    name: "Booking API problems",
    message: "Bug report",
    time: "40m",
    active: false,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY7wTnfP7AnwrjWnYgUtwgv_4ijfZ3_I0PO4FioSRbOVLWm7qYnftHShHAwjtBpDQ5jM&usqp=CAU",
  },
  {
    id: 5,
    name: "Miracle . Exemplary Bank",
    message: "Hey there, im here too",
    time: "40m",
    active: false,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoD2nQ5z7oADtCxdhEViqUf2sHwLw4WqNZDA&s",
  },
];

const InboxSidebar = () => {
  return (
    <div className="px-4 py-1 flex flex-col bg-white  ">
      {/*  Header Section */}
      <div>
        <h2 className="text-[20px] font-semibold">Your inbox</h2>
      </div>

      {/* Chats Section */}
      <div className="overflow-y-auto flex-1 mt-4 space-y-1">
        <div className=" mt-3 flex justify-between items-center">
          <div className="text-sm font-semibold">
            <select className="bg-white text-sm">
              <option>5 Open</option>
              <option>All</option>
              <option>Archived</option>
            </select>
          </div>
          <div className="text-sm font-semibold">
            <select className="bg-white  text-sm">
              <option>Waiting longest</option>
              <option>Most recent</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`cursor-pointer rounded-2xl px-3 py-2 flex items-center gap-3 ${
              chat.active ? "bg-[#ebf3ff] text-gray-400" : "hover:bg-gray-100"
            }`}
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 relative">
              <div className="font-medium text-sm">{chat.name}</div>
              <div className="flex justify-between items-center w-full gap-x-2">
                <div className="text-xs text-gray-500 truncate whitespace-nowrap overflow-hidden max-w-[150px]">
                  {chat.message}
                </div>
                <div className="text-[10px] text-gray-400 flex-shrink-0">
                  {chat.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-2">
      <button className="text-gray-800 m-4 px-2 py-1 shadow-md rounded-md text-[19px] cursor-pointer hover:text-gray-500 "><TbLayoutSidebarRight /></button>
      </div>
    </div>
  );
};

export default InboxSidebar;
