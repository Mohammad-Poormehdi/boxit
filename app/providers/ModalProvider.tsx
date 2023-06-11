"use client";

import { useEffect, useState } from "react";
import Modal from "../components/modals/Modal";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import CreateBoxModal from "../components/modals/CreateBoxModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <CreateBoxModal />
    </>
  );
};
export default ModalProvider;
