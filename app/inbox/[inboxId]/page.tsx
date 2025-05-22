"use client";

import React, { useState } from "react";
import Inbox from "./inbox";
import Mentions from "./mentions";
import { Separator } from "@/components/ui/separator";
import Editor from "./editor";
import Agent from "./aiagent";
import CreatedByYou from "./createdByYou";

interface Message {
  name: string;
  text: string;
  time: string;
}

export default function InboxPage() {
  const [activeView, setActiveView] = useState("mentions");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [composerContent, setComposerContent] = useState("");

  const renderContent = () => {
    switch (activeView) {
      case "mentions":
      case "all":
      case "unassigned":
      case "dashboard":
      case "team-inbox":
        return (
          <Mentions
            onMessageSelect={setSelectedMessage}
            selectedMessage={selectedMessage}
          />
        );
      case "created-by-you":
        return <CreatedByYou />;
      default:
        return (
          <Mentions
            onMessageSelect={setSelectedMessage}
            selectedMessage={selectedMessage}
          />
        );
    }
  };

  return (
    <div className="p-4 flex h-screen">
      <div className="bg-gray-200 xl:w-[15%] rounded-l-4xl">
        <Inbox setActiveView={setActiveView} />
      </div>
      <Separator orientation="vertical" />
      <div className="bg-gray-200 xl:w-[20%] rounded-r-4xl">
        {renderContent()}
      </div>
      <div className="bg-gray-100 xl:w-[38%] rounded-4xl ml-3 flex flex-col">
        <Editor message={selectedMessage} composerContent={composerContent} />
      </div>
      <div className="bg-gray-100 xl:w-[25%] rounded-4xl ml-3">
        <Agent onAddToComposer={setComposerContent} />
      </div>
    </div>
  );
}
