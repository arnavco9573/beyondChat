"use client";
import {
  Archive,
  Bot,
  ChevronDown,
  Ellipsis,
  InboxIcon,
  MessageSquareText,
  MoonStar,
  Phone,
  Smile,
  Star,
  Sunset,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface EditorProps {
  message: {
    name: string;
    text: string;
    time: string;
  } | null;
  composerContent?: string;
}

export default function Editor({ message, composerContent }: EditorProps) {
  const [replyText, setReplyText] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null); // 👈 Correct ref

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [replyText]);

  useEffect(() => {
    if (composerContent) {
      setReplyText(composerContent);
    }
  }, [composerContent]);
  return (
    <div className="p-4 h-full flex flex-col overflow-hidden">
      {message ? (
        <>
          {/* Message header */}
          <div className="border-b pb-3 mt-2 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{message.name}</h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1.5 hover:bg-gray-200">
                <Star size={20} />
              </div>
              <div className="bg-gray-300 rounded-full p-1.5">
                <Ellipsis size={20} />
              </div>
              <div className="bg-gray-300 rounded-full p-1.5">
                <Archive size={20} className="text-black" />
              </div>
              <div className="bg-gray-300 rounded-full p-1.5">
                <Phone size={20} className="text-black" />
              </div>
              <div className="bg-gray-300 rounded-full p-1.5">
                <MoonStar size={20} className="text-black" />
              </div>
              <button className="flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-full text-sm cursor-pointer">
                <InboxIcon size={18} />
                Close
              </button>
            </div>
          </div>

          {/* Message content */}
          <div
            className="flex-1 overflow-y-auto py-4 space-y-6 px-4"
            style={{ scrollbarWidth: "none" }}
          >
            {/* User Message 1 (text) */}
            <div className="flex items-start gap-2">
              {/* User Icon */}
              <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">
                {message.name.charAt(0).toUpperCase()}
              </div>
              {/* Message Content */}
              <div className="bg-gray-200 p-3 rounded-xl max-w-sm w-fit text-sm">
                {message.text}
                <p className="text-xs text-gray-500 mt-1">2m</p>
              </div>
            </div>

            {/* User Message 2 (image + message) */}
            <div className="flex items-start gap-2">
              {/* User Icon */}
              <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">
                {message.name.charAt(0).toUpperCase()}
              </div>

              {/* Message Content */}
              <div className="bg-gray-200 p-3 rounded-xl max-w-sm w-fit text-sm">
                {/* Uploaded image */}
                {/* @next/next/no-img-element */}
                <img
                  src="/sweater_image.png"
                  alt="Damaged item"
                  className="w-40 rounded-lg"
                />
                <p className="text-sm text-gray-800 mt-2">
                  There's a hole in the sweater. Can you help?
                </p>
                <p className="text-xs text-gray-500 mt-1">1m</p>
              </div>
            </div>

            {/* Agent Response 1 */}
            <div className="flex justify-end gap-2 items-end">
              <div className="bg-blue-100 text-gray-800 p-3 rounded-xl max-w-sm w-fit text-sm shadow-sm">
                <p>
                  Sorry about that! I see your order #56789 is a merino sweater.
                  This needs a team member's approval.
                </p>
                <p className="text-xs text-gray-500 mt-1 items-end">
                  Seen - 1m
                </p>
              </div>
              <Sunset size={20} />
            </div>

            {/* Assignment Info */}
            <p className="text-center text-xs text-gray-500 mt-4">
              Operator assigned this conversation to James · Just now
            </p>

            {/* Agent Response 2 */}
            <div className="flex justify-end gap-2 items-end">
              <div className="bg-blue-100 text-gray-800 p-3 rounded-xl max-w-sm w-fit text-sm shadow-sm">
                <p>I'm transferring this to someone who can assist further.</p>
                <p className="text-xs text-gray-500 mt-1 items-end">
                  Seen - 1m
                </p>
              </div>
              <Sunset size={20} />
            </div>

            {/* Agent Final Response with Avatar */}
            <div className="flex justify-end gap-2 items-end">
              <div className="bg-blue-100 text-gray-800 p-3 rounded-xl max-w-sm w-fit text-sm shadow-sm">
                <p>
                  Hi {message.name}, thanks for waiting! Once you return the
                  item, we’ll issue a full refund within 5 business days.
                  <span>
                    {" "}
                    I’ve also sent you a discount voucher for the inconvenience.
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-1 items-end">
                  Seen - 1m
                </p>
              </div>
               {/* @next/next/no-img-element */}
              <img
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                alt="Agent"
                className="h-6 w-6 rounded-full"
              />
            </div>

            {/* User Confirmation Message */}
            <div className="flex items-start gap-2 mt-4">
              {/* User Icon */}
              <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold">
                {message.name.charAt(0).toUpperCase()}
              </div>

              {/* Message Content */}
              <div className="bg-gray-200 p-3 rounded-xl max-w-sm w-fit text-sm">
                That’s great! Thank you so much.
                <p className="text-xs text-gray-500 mt-1">1m</p>
              </div>
            </div>
          </div>

          {/* Reply section */}
          <div className="mt-auto pt-4">
            {/* Textarea + Buttons */}
            <div className="relative bg-white border rounded-xl p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-sm flex gap-0.5 items-end">
                  <MessageSquareText
                    size={18}
                    className="text-black flex-shrink-0"
                  />
                  Reply
                  <ChevronDown size={16} className="flex-shrink-0" />
                </span>
              </div>
              <textarea
                className="w-full resize-none border-none focus:outline-none text-sm mb-5"
                placeholder="Use ⌘K for shortcuts"
                rows={3}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <div className="absolute left-3 bottom-2 flex items-center gap-3">
                <button className="text-gray-600 text-lg hover:text-black">
                  <Zap size={16} />
                </button>
                <button className="text-gray-600 text-lg hover:text-black">
                  {/*  @next/next/no-img-element */}
                  <img src="/save.png" alt="Save" className="w-3 h-3" />
                </button>
                <button className="text-gray-600 text-lg hover:text-black">
                  <Smile size={16} />
                </button>
                <button className="text-gray-600 text-lg hover:text-black">
                  <Bot size={16} />
                </button>
              </div>
              <div className="absolute right-3 bottom-2 flex items-center">
                <button
                  className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 
              ${
                replyText.trim()
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
                  disabled={!replyText.trim()}
                >
                  Send
                  <span className="text-xs">▾</span>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Select a message to view</p>
        </div>
      )}
    </div>
  );
}
