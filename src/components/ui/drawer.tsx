// src/components/ui/drawer.tsx

import type { ReactNode } from "react";

interface DrawerProps {
  open: boolean;
  children: ReactNode;
}

export default function Drawer({
  open,
  children,
}: DrawerProps) {

  if (!open) return null;

  return (
    <div
      className="
      fixed
      right-0
      top-0
      w-80
      h-screen
      bg-background
      border-l
      p-6
      z-50
      "
    >
      {children}
    </div>
  );
}