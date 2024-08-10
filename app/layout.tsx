import type { Metadata } from "next";
import "./../styles/globals.scss";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "HoloBank",
  description: "Modern Digital Bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary w-full">
        <div className="paddingX flexCenter ">
          <div className="boxWidth">
            <Navbar />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
