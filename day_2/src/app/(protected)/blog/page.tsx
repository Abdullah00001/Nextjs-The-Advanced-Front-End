import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Page",
};
function Blog() {
  return (
    <>
      <section>
        <h1 className="text-4xl text-center">Blog Page</h1>
      </section>
    </>
  );
}

export default Blog;
