"use client";

import useCreateBoxModal from "@/app/hooks/useCreateBoxModal";
import Button from "../Button";
import Input from "../Input";
import Modal from "./Modal";
import Textarea from "../Textarea";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateBoxModal = () => {
  const createBoxModal = useCreateBoxModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    axios
      .post("/api/box/", { name: data.name, description: data.description })
      .then(() => {
        toast.success("باکس جدید با موفقیت ایجاد شد");
        createBoxModal.onClose();
        router.refresh();
      })
      .catch((error) => {
        toast.error("خطای سرور");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Modal
      title="ساخت باکس جدید"
      description="برای اضافه کردن وسایل خود باکس بسازید"
      isOpen={createBoxModal.isOpen}
      onChange={createBoxModal.onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          {...register("name", { required: "نام الزامی است" })}
          label="نام"
        />
        <Textarea {...register("description")} label="توضیحات" />
        <Button type="submit" className="text-black w-full bg-white">
          ساختن
        </Button>
      </form>
    </Modal>
  );
};
export default CreateBoxModal;
