import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "Its Home Page",
};
function RootPage() {
  return (
    <>
      <h1 className="text-4xl text-center">Home</h1>
    </>
  );
}

export default RootPage;
