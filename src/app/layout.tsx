import type { Metadata } from "next";
import "../css/globals.css";
import { ReduxProvider } from "@/redux/provider";
import { interFont } from "@/utils/font";


export const metadata: Metadata = {
  title: "LLI Indonesia",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body >
          <div className={` ${interFont.className} dark:bg-boxdark-2 dark:text-bodydark`}>
            {children}
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}