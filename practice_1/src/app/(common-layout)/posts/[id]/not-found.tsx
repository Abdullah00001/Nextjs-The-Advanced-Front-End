// app/posts/not-found.tsx
export default function PostNotFound() {
  return (
    <main className="max-w-2xl mx-auto p-10 mt-20 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        404 - Post Not Found
      </h2>
      <p className="text-gray-600">
        The post you&apos;re looking for doesn&apos;t exist or was removed.
      </p>
    </main>
  );
}
