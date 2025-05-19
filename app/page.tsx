import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20 font-geist">
      <Button asChild>
        <Link href="/inbox/1236">Go to the inbox</Link>
      </Button>
    </div>
  );
}
