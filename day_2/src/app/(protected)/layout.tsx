import Navbar from "@/components/Navbar";
import { IChildrenProps } from "@/interfaces/global.interfaces";
function ProtectedLayout({ children }: IChildrenProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default ProtectedLayout;
