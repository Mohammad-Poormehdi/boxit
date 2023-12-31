import Navbar from "./components/Navbar";
import Modal from "./components/modals/Modal";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import ModalProvider from "./providers/ModalProvider";
import ToasterProvider from "./providers/ToasterProvider";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import authOptions from "@/helpers/auth";

const poppins = Poppins({ weight: ["300", "700"], subsets: ["latin"] });
const IranSans = localFont({
  src: [
    { path: "../public/fonts/IRANSansX-Bold.ttf", style: "bold" },
    { path: "../public/fonts/IRANSansX-Regular.ttf", style: "normal" },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${poppins.className} ${IranSans.className}`}>
        <Navbar session={session} />
        <ToasterProvider />
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
