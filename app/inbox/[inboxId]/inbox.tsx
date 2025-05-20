"use client";
import {
  AtSign,
  Plus,
  Search,
  UserCircle2,
  PencilLine,
  UsersRound,
  ChartNoAxesColumn,
  InboxIcon,
  Users,
  Braces,
  Bot,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const inboxItems = [
  { label: "Mentions", icon: AtSign, count: 12 },
  { label: "Created by You", icon: PencilLine, count: 4 },
  { label: "ALL", icon: UsersRound, count: 29 },
  { label: "Unassigned", icon: UserCircle2, count: 6 },
  { label: "Dashboard", icon: ChartNoAxesColumn, count: 3 },
];

interface InboxProps {
  setActiveView: (view: string) => void;
}

export default function Inbox({ setActiveView }: InboxProps) {
  const [activeItem, setActiveItem] = useState<string>("Your inbox");

  const handleItemClick = (itemLabel: string) => {
    setActiveItem(itemLabel);
    // Map the item labels to view names
    const viewMap: Record<string, string> = {
      "Your inbox": "mentions",
      Mentions: "mentions",
      "Created by You": "created-by-you",
      ALL: "all",
      Unassigned: "unassigned",
      Dashboard: "dashboard",
      "Team Tickets 1": "team-inbox",
      "Inbox Basics": "team-inbox",
    };

    setActiveView(viewMap[itemLabel] || "mentions");
  };

  return (
    <div className="p-4">
      {/* Heading Div */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Inbox</h2>
        <div className="flex gap-1">
          <div className="bg-gray-300 rounded-full p-2 cursor-pointer">
            <Search size={14} />
          </div>
          <div className="bg-gray-300 rounded-full p-2 cursor-pointer">
            <Plus size={14} />
          </div>
        </div>
      </div>

      {/* menu items */}
      <div className="mt-4">
        {/* Your Inbox */}
        <div
          className={`flex justify-between items-center py-1 px-3 rounded-full cursor-pointer transition mb-2 ${
            activeItem === "Your inbox"
              ? "bg-gray-100 text-black"
              : "hover:bg-gray-100"
          }`}
          onClick={() => {
            setActiveItem("Your inbox");
            handleItemClick("Your inbox");
          }}
        >
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://avatars.githubusercontent.com/u/30373425?v=4" alt="@shadcn" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium">Your inbox</p>
          </div>
          <p className="text-sm text-gray-500">1</p>
        </div>

        {/* Other Inbox Items */}
        {inboxItems.map((item) => (
          <div
            key={item.label}
            className={`flex justify-between items-center py-1 px-3 rounded-full cursor-pointer transition mb-2 ${
              activeItem === item.label
                ? "bg-gray-100 text-black"
                : "hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveItem(item.label);
              handleItemClick(item.label);
            }}
          >
            <div className="flex items-center gap-2">
              <span>
                <item.icon size={14} />
              </span>
              <p className="text-sm font-medium">{item.label}</p>
            </div>
            <p className="text-sm text-gray-500">{item.count}</p>
          </div>
        ))}

        {/* Accordion Items */}
        <div className="flex ml-3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>
                    <InboxIcon size={16} />
                  </span>
                  <p>Team Inboxes</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 ml-6">
                  {[
                    "Team Tickets 1",
                    "Inbox Basics",
                    "Intercom Basics",
                    "Billing Operations",
                    "Fin Questions",
                  ].map((team) => (
                    <div
                      key={team}
                      className={`cursor-pointer ${
                        activeItem === team
                          ? "text-blue-600 font-medium"
                          : "hover:underline"
                      }`}
                      onClick={() => {
                        setActiveItem(team);
                        handleItemClick(team);
                      }}
                    >
                      {team}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>
                    <Users size={16} />
                  </span>
                  <p>Teammates</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 ml-6">
                  {["John Doe", "Jane Smith", "Mike Johnson"].map(
                    (teammate) => (
                      <div
                        key={teammate}
                        className={`cursor-pointer ${
                          activeItem === teammate
                            ? "text-blue-600 font-medium"
                            : "hover:underline"
                        }`}
                        onClick={() => setActiveItem(teammate)}
                      >
                        {teammate}
                      </div>
                    )
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>
                    <Braces size={16} />
                  </span>
                  <p>Views</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 ml-6">
                  {["Today", "This Week", "This Month"].map((view) => (
                    <div
                      key={view}
                      className={`cursor-pointer ${
                        activeItem === view
                          ? "text-blue-600 font-medium"
                          : "hover:underline"
                      }`}
                      onClick={() => setActiveItem(view)}
                    >
                      {view}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>
                    <Bot size={16} />
                  </span>
                  <p>Fin AI Agent</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="ml-6">
                  <div
                    className={`cursor-pointer ${
                      activeItem === "AI Agent"
                        ? "text-blue-600 font-medium"
                        : "hover:underline"
                    }`}
                    onClick={() => setActiveItem("AI Agent")}
                  >
                    AI Agent
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
