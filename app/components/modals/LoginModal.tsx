"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Input from "../Input";
import Button from "../Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { data } from "autoprefixer";
import { toast } from "react-hot-toast";
import { error } from "console";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    signIn("credentials", { ...data, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("نام کاربری یا کلمه عبور اشتباه است");
        } else {
          toast.success("ورود موفقیت آمیز بود");
          router.refresh();
          loginModal.onClose();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Modal
        title="ورود به حساب کاربری"
        description="برای استفاده از امکانات سایت وارد شوید"
        isOpen={loginModal.isOpen}
        onChange={loginModal.onClose}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-3"
        >
          <Input
            {...register("username", { required: "این فیلد الزامی است" })}
            label="نام کاربری"
          />
          <Input
            type="password"
            {...register("password", { required: "این فیلد الزامی است" })}
            label="رمز عبور"
          />
          <Button className="text-black bg-white w-full">ورود</Button>
        </form>
        <div className="flex justify-center items-center gap-x-2">
          <p
            onClick={() => {
              loginModal.onClose();
              registerModal.onOpen();
            }}
            className="underline underline-offset-2 cursor-pointer"
          >
            ثبت نام کنید
          </p>
          <p>حساب کاربری ندارید ؟</p>
        </div>
      </Modal>
    </>
  );
};
export default LoginModal;
