"use client";

import Button from "@/app/components/Button";
import useCreateBoxModal from "@/app/hooks/useCreateBoxModal";

const PageClient = () => {
  const createBoxModal = useCreateBoxModal();
  return (
    <div className="w-full h-full">
      <Button className="w-full" onClick={createBoxModal.onOpen}>
        ساخت باکس جدید
      </Button>
    </div>
  );
};
export default PageClient;
