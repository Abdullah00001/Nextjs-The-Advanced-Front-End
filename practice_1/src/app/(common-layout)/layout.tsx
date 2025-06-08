import Navbar from "@/components/Navbar";
import { WithChildren } from "@/interfaces/react/withChildren";

function CommonLayout({ children }: WithChildren) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}

export default CommonLayout;
