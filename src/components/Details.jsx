import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { FiPlus } from "react-icons/fi";


const sections = [
  {
    title: "LINKS",
    items: ["Tracker ticket", "Back-office tickets", "Side conversations"],
  },
  { title: "USER DATA", items: [] },
  { title: "CONVERSATION ATTRIBUTES", items: [] },
  { title: "COMPANY DETAILS", items: [] },
  { title: "SALESFORCE", items: [] },
  { title: "STRIPE", items: [] },
  { title: "JIRA FOR TICKETS", items: [] },
];

const Lists = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 px-3 border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-semibold text-sm flex justify-between text-gray-800"
      >
        {title}
        <span>{open ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </button>
      {open && (
        <ul className="px-6 pb-4 space-y-2 list-none text-sm text-gray-800">
          {items.length ? (
            items.map((item, i) => (
              <li key={i} className="w-full flex items-center py-1 justify-between">
                <div className="flex items-center gap-2">
                  <MdArrowOutward size={16} className="text-gray-500" /> 
                  <span className="font-semibold">{item}</span>{" "}
                </div>
                <button className="text-gray-800 bg-gray-200 rounded-[8px] cursor-pointer p-[4px]">
                  <FiPlus  size={16} /> 
                </button>
              </li>
            ))
          ) : (
            <li className="italic text-gray-400">No data</li>
          )}
        </ul>
      )}
    </div>
  );
};

const Details = () => {
  return (
    <div className="text-sm  w-full">
      {/* Assignee Section */}
      <div className="px-7 py-4 border-b-3 border-gray-100">
        <div className="flex items-center gap-[50px] mb-1">
          <div className="text-gray-500 font-semibold">Assignee</div>
          <div className="font-semibold">👤 Brian Byrne</div>
        </div>
        <div className="flex items-center gap-[73px]">
          <div className="text-gray-500 font-semibold">Team</div>
          <div className="font-medium">👤 Unassigned</div>
        </div>
      </div>

      {/* Lists Section */}
      <div>
        {sections.map((sec, i) => (
          <Lists key={i} title={sec.title} items={sec.items} />
        ))}
      </div>
    </div>
  );
};

export default Details;




