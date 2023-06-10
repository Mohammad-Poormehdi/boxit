"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  onChange: () => void;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onChange,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed flex items-center justify-center inset-0 bg-slate-900/50" />
        <Dialog.Content className="fixed flex flex-col gap-y-3 h-full md:h-auto rounded-lg p-5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full md:w-1/4 mx-auto bg-black text-white z-50 ">
          <Dialog.Title className="text-2xl font-semibold text-center">
            {title}
          </Dialog.Title>
          <Dialog.Description className="font-light text-sm text-center">
            {description}
          </Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button onClick={onChange} className="absolute top-5 right-5">
              <IoMdClose className="text-white " size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Modal;
