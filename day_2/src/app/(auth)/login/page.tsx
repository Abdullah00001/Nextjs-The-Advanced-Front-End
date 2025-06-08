import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Its Login Page",
};
function LoginPage() {
  return (
    <>
      <h1 className="text-4xl text-center">Login</h1>
    </>
  );
}

export default LoginPage;
