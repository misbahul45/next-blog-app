import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Wrapper from "@/components/layout/Wrapper";

const ubuntu = Ubuntu({
  weight:["500","700","400"],
  subsets:['greek-ext']
});

export const metadata: Metadata = {
  title: "Misbahul's Blog",
  description: "Created by Misbahul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-100 ${ubuntu.className} min-h-screen`}>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
