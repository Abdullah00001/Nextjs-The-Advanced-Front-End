"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReturnToPostsButton() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (
      document.referrer &&
      new URL(document.referrer).origin === window.location.origin
    ) {
      setCanGoBack(true);
    }
  }, []);

  const handleClick = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push("/posts");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition"
    >
      ← Go Back to Posts
    </button>
  );
}
