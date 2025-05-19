"use client";
import Link from "next/link";
import {
  UserCircle,
  Settings,
  Inbox,
  SquareLibrary,
  BookOpen,
  ChartNoAxesColumn,
  SendHorizontal,
  Users,
} from "lucide-react";

const topMenu = [
  { icon: <Inbox size={20} />, href: "/" },
  { icon: <SquareLibrary size={20} />, href: "/inbox/645" },
  { icon: <BookOpen size={20} />, href: "/inbox/644" },
  { icon: <ChartNoAxesColumn size={20} />, href: "/inbox/624" },
  { icon: <SendHorizontal size={20} />, href: "/inbox/124" },
  { icon: <Users size={20} />, href: "/inbox/12" },
];

const bottomMenu = [
  { icon: <UserCircle size={20} />, href: "/profile" },
  { icon: <Settings size={20} />, href: "/settings" },
];

export default function Menu() {
  return (
    <nav className="h-full flex flex-col justify-between py-4">
      {/* ----- top icons ----- */}
      <div className="flex flex-col items-center gap-4">
        {topMenu.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="text-black-600 transition-colors"
          >
            {m.icon}
          </Link>
        ))}
      </div>

      {/* ----- bottom icons ----- */}
      <div className="flex flex-col items-center gap-4">
        {bottomMenu.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="text-black transition-colors"
          >
            {m.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
