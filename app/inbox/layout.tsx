"use client";
import type { ReactNode } from "react";
import Menu from "./menu";

interface InboxLayoutProps {
  children: ReactNode;
}

export default function InboxLayout({ children }: InboxLayoutProps) {
  return (
    <div className="h-screen flex bg-gray-300">
      {/* Left Sidebar */}
      <div className="w-[14%] md:w-[4%] lg:w-[4%] xl:w-[2%] p-4 ml-1 scrollbar-hide">
        <Menu/>
      </div>

      {/* Right Main Content */}
      <div className="w-[86%] md:w-[96%] lg:w-[96%] xl:w-[98%] overflow-y-auto scrollbar-hide">
        <div className="">{children}</div>
      </div>
    </div>
  );
}
