"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

// src/components/ui/PostCard.tsx
type PostCardProps = {
  id: number;
  title: string;
  body: string;
};

export default function PostCard({ title, body, id }: PostCardProps) {
  const navigate = useRouter();
  return (
    <div className="rounded-xl border p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">
        {body.length > 15 ? `${body.slice(0, 15)}...` : body}
      </p>
      <Button onClick={() => navigate.push(`/posts/${id}`)}>Details</Button>
    </div>
  );
}
