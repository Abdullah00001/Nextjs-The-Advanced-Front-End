import { IChildrenProps } from "@/interfaces/global.interfaces";
import "./globals.css";
import TopLoader from "@/components/TopLoader";

function RootLayout({ children }: IChildrenProps) {
  return (
    <html>
      <body>
        <TopLoader />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
