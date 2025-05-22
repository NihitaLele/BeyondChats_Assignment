import React, { useState } from "react";
import InboxSidebar from "./InboxSidebar";
import ChatWindow from "./ChatWindow";
import AISection from "./AISection";


const MobileLayout = () => {
  const [activeSection, setActiveSection] = useState("chat");

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 overflow-y-auto">
        {activeSection === "inbox" && <InboxSidebar />}
        {activeSection === "chat" && <ChatWindow />}
        {activeSection === "ai" && <AISection />}
      </div>

      <div className="flex justify-around border-t border-gray-200 py-2 bg-white text-gray-800 font-semibold shadow-inner">
        <button
          className={`text-sm ${activeSection === "inbox" ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => setActiveSection("inbox")}
        >
          Inbox
        </button>
        <button
          className={`text-sm ${activeSection === "chat" ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => setActiveSection("chat")}
        >
          Chat
        </button>
        <button
          className={`text-sm ${activeSection === "ai" ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => setActiveSection("ai")}
        >

          AI Copilot
        </button>
      </div>
    </div>
  )
}

export default MobileLayout