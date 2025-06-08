import { Metadata } from "next";
import { notFound } from "next/navigation";
import PostServices from "@/services/post/post.services";
import ReturnToPostsButton from "@/features/post/components/ReturnToPostsButton";

// export const metadata: Metadata = {
//   title: "Post Details",
//   description: "Its Post Details Page",
// };

type PostDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const { processGetSinglePost } = PostServices;

export async function generateMetadata({
  params,
}: PostDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await processGetSinglePost({ id: Number(id) });

  if (!post) return {};

  return {
    title: `Post #${id} - ${post.title}`,
    description: post.body.slice(0, 100), // short snippet as meta description
  };
}

export default async function PostDetailsPage({
  params,
}: PostDetailsPageProps) {
  const { id } = await params;
  const post = await processGetSinglePost({ id: Number(id) });

  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md space-y-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Post #{id}</h1>
        <p className="text-gray-700 text-xl font-semibold">{post.title}</p>
      </header>

      <section className="text-gray-600 text-base leading-relaxed">
        {post.body}
      </section>

      <div className="pt-6">
        <ReturnToPostsButton />
      </div>
    </main>
  );
}
