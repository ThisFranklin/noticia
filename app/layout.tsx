import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/Header";
import SideNav from "../components/sidenav/SideNav";

export const metadata: Metadata = {
  title: "Noticia - Save your Notes !",
  description: "A Google Keep like App...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="flex min-h-full dark:bg-slate-900 dark:text-slate-200 flex-col antialiased">
        <Header />
        <main className="flex grow">
          <SideNav />
          {children}
        </main>
      </body>
    </html>
  );
}
