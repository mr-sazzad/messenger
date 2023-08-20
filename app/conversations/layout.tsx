import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

const ConversationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar>
      <ConversationList initialItems={[]} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default ConversationsLayout;
