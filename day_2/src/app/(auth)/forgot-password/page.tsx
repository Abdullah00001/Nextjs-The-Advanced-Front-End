import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Its Forgot Password Page",
};
function ForgotPasswordPage() {
  return (
    <>
      <h1 className="text-4xl text-center">Forgot Password</h1>
    </>
  );
}

export default ForgotPasswordPage;
