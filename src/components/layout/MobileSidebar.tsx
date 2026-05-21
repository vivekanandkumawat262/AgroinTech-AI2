// src/components/layout/MobileSidebar.tsx

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  return (
    <Sheet>

      <SheetTrigger asChild>
        <button type="button">
          <Menu
            className="
            lg:hidden
            cursor-pointer
            "
          />
        </button>
      </SheetTrigger>

      <SheetContent
        className="
        w-72
        p-0
        bg-green-950
        "
      >
        <Sidebar />
      </SheetContent>

    </Sheet>
  );
}