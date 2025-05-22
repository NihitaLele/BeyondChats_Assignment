import React from "react";
import InboxSidebar from "./components/InboxSidebar";
import ChatWindow from "./components/ChatWindow";
import AISection from "./components/AISection";
import MobileLayout from "./components/MobileLayout";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <div className="hidden lg:grid lg:grid-cols-[350px_1fr_380px] h-full overflow-hidden">
        <InboxSidebar />
        <ChatWindow />
        <AISection />
      </div>

      <div className="lg:hidden block h-full overflow-hidden">
        <MobileLayout />
      </div>
    </div>
  );
};

export default App;
