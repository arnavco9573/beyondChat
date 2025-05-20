import { ChevronDown } from "lucide-react";
import React from "react";

// Function to generate consistent color from name
const getAvatarColor = (name: string) => {
  const colors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-indigo-300",
  ];
  const hash = name
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + acc, 6);
  return colors[hash % colors.length];
};

// Dummy data
const dummyMessages = [
  {
    name: "Tom Simone",
    text: "I'd like a refund, the sweater I ordered arrived with a hole in it",
    time: "1m",
  },
  {
    name: "Sarah Johnson",
    text: "When will my order ship? I need it by Friday",
    time: "5m",
  },
  {
    name: "Michael Brown",
    text: "The product quality is excellent, thank you!",
    time: "15m",
  },
  {
    name: "Emily Davis",
    text: "Can I change the shipping address for my order?",
    time: "1h",
  },
  {
    name: "David Wilson",
    text: "I have a question about the return policy",
    time: "2h",
  },
];

export default function Mentions() {
  return (
    <div className="p-4 h-full flex flex-col">
      {" "}
      {/* Added h-full and flex-col */}
      <h3 className="font-semibold text-xl">Mentions</h3>
      <div className="flex justify-between items-center mt-5 text-sm font-semibold">
        <div className="flex items-end gap-1">
          <p>12 Open</p>
          <ChevronDown size={18} />
        </div>
        <div className="flex items-end gap-1">
          <p>Newest</p>
          <ChevronDown size={18} />
        </div>
      </div>
      {/* Message list container with fixed height */}
      <div
        className="mt-2 flex-1 overflow-y-auto scrollbar-hide"
        style={{ maxHeight: "calc(100vh - 180px)" ,scrollbarWidth:"none"}}
      >
        <div className="space-y-2 pr-2">
          {" "}
          {/* Added pr-2 for scrollbar space */}
          {dummyMessages.map((message, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <div
                className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full ${getAvatarColor(
                  message.name
                )}`}
              >
                <span className="font-medium text-gray-700">
                  {message.name.charAt(0).toUpperCase()}
                </span>
              </div>

              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex justify-between items-baseline gap-2">
                  <p className="font-medium truncate">{message.name}</p>
                </div>
                <div className="flex justify-between items-end gap-2">
                  <p className="text-sm text-gray-500 truncate mt-1">
                    {message.text}
                  </p>
                  <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0">
                    {message.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
