"use client";

import useLoginModal from "../hooks/useLoginModal";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
  const loginModal = useLoginModal();
  return (
    <nav className="w-full shadow-sm">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Logo />
        <Button onClick={loginModal.onOpen}>ورود</Button>
      </div>
    </nav>
  );
};
export default Navbar;
