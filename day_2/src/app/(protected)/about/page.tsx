import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};
function About() {
  return <div className="text-4xl text-center">About</div>;
}

export default About;
