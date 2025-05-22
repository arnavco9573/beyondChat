import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bird,
  Building2,
  CircleUserRound,
  Ellipsis,
  FileText,
  Link,
  MessageSquareText,
  MoveUp,
  PanelRight,
  PenLine,
  Plus,
  SlidersHorizontal,
  StickyNote,
  Tags,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AgentProps {
  onAddToComposer: (message: string) => void;
}

export default function Agent({ onAddToComposer }: AgentProps) {
  // @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState("details");
  // @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  // @typescript-eslint/no-unused-vars
  const [message, setMessage] = useState("");
  const [assignee, setAssignee] = useState("Unassigned");
  const [assigneeIcon, setAssigneeIcon] = useState(
    <CircleUserRound size={16} className="text-muted-foreground" />
  );

  const [copilotMessage, setCopilotMessage] = useState("");
  const messageRef = useRef<HTMLParagraphElement>(null);

  const handleAddToComposer = (message: string) => {
    onAddToComposer(message);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      // Simulate assignment after 4 seconds
      setAssignee("James Anderson");
      setAssigneeIcon(
        <Avatar className="h-5 w-5">
          <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      );
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Tabs
      defaultValue="details"
      value={activeTab}
      onValueChange={setActiveTab}
      className="p-4 mt-4 h-full"
    >
      {/* Tabs header row */}
      <div className="relative">
        <div className="flex items-center justify-between">
          {/* Tab Buttons */}
          <div className="relative w-[200px]">
            <TabsList className="flex w-full border-b-0 relative z-10 bg-transparent sm:bg-transparent">
              <TabsTrigger
                value="details"
                className="flex-1 border-b-2 border-transparent data-[state=active]:border-none data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:bg-gray-100 sm:bg-gray-100 pb-5"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="copilot"
                className="flex-1 border-b-2 border-transparent data-[state=active]:border-none data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:bg-gray-100 pb-5"
              >
                Copilot
              </TabsTrigger>

              {/* Orange sliding underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-1/2 bg-orange-500 transition-transform duration-300 ease-in-out ${
                  activeTab === "copilot" ? "translate-x-full" : "translate-x-0"
                }`}
              />
            </TabsList>
          </div>

          {/* Icon */}
          <div className="bg-gray-300 mb-[10px] rounded-full w-8 h-8 flex items-center justify-center">
            <PanelRight size={16} />
          </div>
        </div>

        {/* Full-width gray separator */}
        <Separator
          orientation="horizontal"
          className="absolute bottom-1 left-0 w-full bg-gray-200"
        />
      </div>

      {/* Tabs content */}
      <TabsContent value="details" className="mt-4">
        <div className="p-2">
          <div className="mx-2 mr-6 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Assignee</p>
              <p className="flex items-center gap-2">
                <span>{assigneeIcon}</span>
                {assignee}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Team</p>
              <p className="flex items-center gap-2">
                <span>
                  <Bird size={16} />
                </span>
                Disputes team
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" className="my-4" />
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-full gap-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="flex items-center gap-2 font-semibold">
                  <span>
                    <Link size={16} />
                  </span>
                  Links
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  <p className="flex justify-between items-center">
                    Tracker Tickets
                    <span className="bg-gray-300 p-1 rounded-full">
                      {" "}
                      <Plus size={16} />
                    </span>
                  </p>
                  <p className="flex justify-between items-center">
                    Back-office Tickets
                    <span className="bg-gray-300 p-1 rounded-full">
                      {" "}
                      <Plus size={16} />
                    </span>
                  </p>
                  <p className="flex justify-between items-center">
                    Side Conversations
                    <span className="bg-gray-300 p-1 rounded-full">
                      {" "}
                      <Plus size={16} />
                    </span>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p className="flex items-center gap-2 font-semibold">
                  <span>
                    <MessageSquareText size={16} />
                  </span>
                  Conversation attributes
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  <p className="flex items-center text-gray-500 justify-between max-w-2/3">
                    Id
                    <span className="text-black">565632</span>
                  </p>
                  <p className="flex items-center text-gray-500 justify-between max-w-2/3">
                    Brand
                    <span className="text-black">Elephant clothing</span>
                  </p>
                  <p className="flex items-center text-gray-500 justify-between max-w-2/3">
                    Topic
                    <span className="text-black">Faculty Product</span>
                  </p>
                  <p className="flex items-center text-gray-500 justify-between max-w-2/3">
                    Priority
                    <span className="">Select</span>
                  </p>
                  <p className="flex items-center text-gray-500 justify-between max-w-2/3">
                    Product area
                    <span className="">Select</span>
                  </p>
                  <p className="flex items-center text-gray-500 justify-between max-w-2/3">
                    Tag ID
                    <span className="text-black">12344566</span>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <p className="flex items-center gap-2 font-semibold">
                  <span>
                    <Building2 size={16} />
                  </span>
                  Company Details
                </p>
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <p className="flex items-center gap-2 font-semibold">
                  <span>
                    <StickyNote size={16} />
                  </span>
                  User Notes
                </p>
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <p className="flex items-center gap-2 font-semibold">
                  <span>
                    <Tags size={16} />
                  </span>
                  User Tags
                </p>
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </TabsContent>
      <TabsContent
        value="copilot"
        className="mt-1 flex flex-col h-[calc(100vh-200px)]"
      >
        {/* Main content area with scroll */}
        <div
          className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Conversation history */}
          <div className="p-4 space-y-4">
            {/* User question */}
            <div className="flex justify-start">
              <div className="">
                <p className="text-lg font-semibold">
                  What is our refund policy for damaged items?
                </p>
              </div>
            </div>

            {/* AI response */}
            <div className="flex flex-col justify-end">
              <div className="bg-gray-300 rounded-lg p-3 space-y-3">
                <p className="text-sm" ref={messageRef}>
                  Hi <span className="font-medium">{"<firstname>"}</span>,
                  thanks for waiting! Once you return the item, we'll issue a
                  full refund within 5 business days. I've also sent you a
                  discount voucher for the inconvenience
                </p>
                <div className="flex items-center gap-3">
                  <button
                    className="flex items-center px-2 py-1 gap-1 text-sm bg-neutral-900 rounded-4xl text-white hover:text-gray-50 hover:bg-neutral-800 cursor-pointer"
                    onClick={() => {
                      if (messageRef.current) {
                        // Clean up the text by removing extra whitespace
                        const message =
                          messageRef.current.textContent
                            ?.replace(/\s+/g, " ")
                            .trim() || "";
                        handleAddToComposer(message);
                      }
                    }}
                  >
                    <PenLine size={14} /> Add to composer
                  </button>
                  <Ellipsis className="text-neutral-900 text-xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Suggested sources */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted-foreground">
                5 relevant sources found
              </p>
            </div>
            <div className="space-y-2">
              {[
                "Getting a refund",
                "Loyalty refund macro",
                "Refund for an unwanted gift",
              ].map((source, i) => (
                <button
                  key={i}
                  className="w-full text-left text-sm p-2 hover:bg-muted rounded flex items-center gap-2"
                >
                  <FileText size={14} className="text-muted-foreground" />
                  {source}
                </button>
              ))}
            </div>
            <button className="text-xs text-primary cursor-pointer hover:underline mt-2">
              See all
            </button>
          </div>
        </div>

        {/* Fixed input area at bottom */}
        <div className="sticky bottom-0 p-1 mb-3">
          <div className="relative">
            <div className="flex items-center border rounded-lg pr-10">
              <textarea
                className="w-full min-h-[50px] max-h-[120px] p-3 text-sm focus:outline-none resize-none border-none"
                placeholder="Ask a question"
                value={copilotMessage}
                onChange={(e) => setCopilotMessage(e.target.value)}
              />
              <div className="absolute right-3 flex items-center gap-2">
                <button className="text-muted-foreground hover:text-foreground p-1">
                  <SlidersHorizontal size={16} />
                </button>
                <button
                  className={`p-2 rounded-full ${
                    copilotMessage.trim()
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={!copilotMessage.trim()}
                >
                  <MoveUp size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
