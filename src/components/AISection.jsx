import React, { useState } from "react";
import AICopilot from "./AICopilot";
import Details from "./Details";
import { AnimatePresence, motion } from "framer-motion";

import { TbLayoutSidebarRight } from "react-icons/tb";

const AISection = () => {
  const [activeTab, setActiveTab] = useState("copilot");

  return (
   <div className="w-full h-full flex flex-col border-l-2 border-gray-100 bg-gradient-to-br">

      {/* Main header section*/}
      <div className="flex justify-between border-b-3 border-gray-100 px-7 pt-4">
        <div className="flex gap-6 text-sm font-medium">
          <button
            className={`pb-2 border-b-3 ${
              activeTab === "copilot"
                ? "border-blue-600 bg-gradient-to-r from-blue-800 via-purple-600 to-pink-400 text-transparent bg-clip-text"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("copilot")}
          >
            AI Copilot
          </button>
          <button
            className={`pb-2 border-b-3 ${
              activeTab === "details"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </div>

        <button className="text-gray-800 mb-3 text-[19px] cursor-pointer hover:text-gray-500">
          <TbLayoutSidebarRight />
        </button>
      </div>

      {/* Animation using framer motion */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === "copilot" ? (
            <motion.div
              key="copilot"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex flex-col"
            >
              <AICopilot />
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full"
            >
              <Details />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AISection;
