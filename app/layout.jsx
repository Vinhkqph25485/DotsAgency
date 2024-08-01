import "./globals.css";
import { Acme } from "next/font/google";
import Header from './components/header/index';



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
