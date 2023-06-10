"use client";

import { useSession } from "next-auth/react";
import useLoginModal from "../hooks/useLoginModal";
import Button from "./Button";
import Logo from "./Logo";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

interface NavbarProps {
  session?: Session | null;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  return (
    <nav className="w-full shadow-sm">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Logo />
        {session ? (
          <Button onClick={() => router.push("/warehouses")}>انبار من</Button>
        ) : (
          <Button onClick={loginModal.onOpen}>ورود</Button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
