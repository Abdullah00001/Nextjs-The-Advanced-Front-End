// app/posts/page.tsx
import PostCard from "@/features/post/components/PostCard";
import PostServices from "@/services/post/post.services";
import { Metadata } from "next";

const { processGetPost } = PostServices;

export const metadata: Metadata = {
  title: "Posts",
  description: "Its Posts Page",
};

export default async function PostsPage() {
  const posts = await processGetPost();
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Posts</h1>
        <p className="text-gray-600 text-lg">
          Explore latest posts and insights from our community.
        </p>
      </header>

      <section className="space-y-6">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            id={post.id}
            body={post.body}
          />
        ))}
      </section>
    </main>
  );
}
