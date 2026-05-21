// src/components/layout/PageContainer.tsx

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <div
      className="
      p-6
      space-y-6
      max-w-7xl
      mx-auto
      "
    >
      {children}
    </div>
  );
}