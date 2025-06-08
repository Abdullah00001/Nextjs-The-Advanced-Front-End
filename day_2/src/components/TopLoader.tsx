// components/TopLoader.tsx
"use client";

import NextNProgress from "nextjs-progressbar";

const TopLoader = () => {
  return (
    <NextNProgress
      color="#3b82f6" // Tailwind blue-500
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  );
};

export default TopLoader;
