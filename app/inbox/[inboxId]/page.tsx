"use client";
import React, { useState } from "react";
import Inbox from "./inbox";
import Mentions from "./mentions";
import { Separator } from "@/components/ui/separator";
import Editor from "./editor";
import Agent from "./aiagent";
import CreatedByYou from "./createdByYou";

interface PageProps {
  params: { inboxId: string };
}

export default function InboxPage({ params }: PageProps) {
  const [activeView, setActiveView] = useState("mentions");
  // Remove the destructuring of params.inboxId if you're not using it
  // Or properly unwrap it if needed:
  // const inboxId = React.use(params).inboxId;

  const renderContent = () => {
    switch (activeView) {
      case "mentions":
        return <Mentions />;
      case "created-by-you":
        return <CreatedByYou />;
      case "all":
        return <Mentions />;
      case "unassigned":
        return <Mentions />;
      case "dashboard":
        return <Mentions />;
      case "team-inbox":
        return <Mentions />;
      default:
        return <Mentions />;
    }
  };

  return (
    <div className="p-4 flex h-full ">
      <div className="min-h-[95vh] bg-gray-200 xl:w-[15%] rounded-l-4xl">
        <Inbox setActiveView={setActiveView} />
      </div>
      <Separator orientation="vertical" />
      <div className="min-h-[95vh] bg-gray-200 xl:w-[20%] rounded-r-4xl ">
        {renderContent()}
      </div>
      <div className="min-h-[95vh] bg-gray-100 xl:w-[38%] rounded-4xl ml-3">
        <Editor />
      </div>
      <div className="min-h-[95vh] bg-gray-100 xl:w-[25%] rounded-4xl ml-3">
        <Agent />
      </div>
    </div>
  );
}