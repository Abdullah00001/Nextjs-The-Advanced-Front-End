import Counter from "@/features/blog/counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details",
  description: "Blog Details Page",
};

async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1 className="text-4xl text-center">Blog Details Page {id}</h1>
      <Counter />
    </>
  );
}

export default BlogDetailsPage;
