import React from "react";
import Inbox from "./inbox";
import Mentions from "./mentions";
import { Separator } from "@/components/ui/separator";
import Editor from "./editor";
import Agent from "./aiagent";

interface PageProps {
  params: { inboxId: string };
}

export default async function InboxPage({ params }: PageProps) {
  const { inboxId } = await params;

  return (
    <div className="p-4 flex h-full ">
      <div className="min-h-[95vh] bg-gray-200 xl:w-[14%] rounded-l-4xl">
        <Inbox />
      </div>
      <Separator orientation="vertical" />
      <div className="min-h-[95vh] bg-gray-200 xl:w-[15%] rounded-r-4xl ">
        <Mentions />
      </div>
      <div className="min-h-[95vh] bg-gray-100 xl:w-[40%] rounded-4xl ml-3">
        <Editor />
      </div>
      <div className="min-h-[95vh] bg-gray-100 xl:w-[27%] rounded-4xl ml-3">
        <Agent />
      </div>
    </div>
  );
}
