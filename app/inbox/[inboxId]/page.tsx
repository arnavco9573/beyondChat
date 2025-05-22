"use client";

import React, { useState } from "react";
import Inbox from "./inbox";
import Mentions from "./mentions";
import { Separator } from "@/components/ui/separator";
import Editor from "./editor";
import Agent from "./aiagent";
import CreatedByYou from "./createdByYou";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

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
    <div className="flex flex-col xl:flex-row h-screen relative">
      {/* Mobile Top Bar */}
      <div className="xl:hidden flex justify-between p-3 bg-gray-100 shadow-md">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon className="w-5 h-5 mr-2" />
              Inbox
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[60%]">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <div className="">
              <Inbox setActiveView={setActiveView} />
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon className="w-5 h-5 mr-2" />
              Messages
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[60%]">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              
            </SheetHeader>
            <div className="">{renderContent()}</div>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon className="w-5 h-5 mr-2" />
              Agent
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[60%]">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              
            </SheetHeader>
            <div className="">
              <Agent onAddToComposer={setComposerContent} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Layout */}
      <div className="hidden xl:flex w-full h-screen p-4">
        <div className="bg-gray-200 w-[15%] rounded-l-4xl">
          <Inbox setActiveView={setActiveView} />
        </div>

        <Separator orientation="vertical" />

        <div className="bg-gray-200 w-[20%] rounded-r-4xl">
          {renderContent()}
        </div>

        <div className="bg-gray-100 w-[38%] rounded-4xl ml-3 flex flex-col">
          <Editor message={selectedMessage} composerContent={composerContent} />
        </div>

        <div className="bg-gray-100 w-[25%] rounded-4xl ml-3">
          <Agent onAddToComposer={setComposerContent} />
        </div>
      </div>

      {/* Mobile Editor (Always visible) */}
      <div className="xl:hidden flex-grow bg-gray-100 overflow-y-auto">
        <Editor message={selectedMessage} composerContent={composerContent} />
      </div>
    </div>
  );
}
