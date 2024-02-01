import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ModalWhole from "@/components/ModalWhole";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalWhole />
        <Header />
        {children}
      </body>
    </html>
  );
}
