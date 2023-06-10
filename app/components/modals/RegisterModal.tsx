"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Modal from "./Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: any) => {
    if (data.password1 !== data.password2) {
      return toast.error("رمز عبور ها  یکسان نیست");
    }
    setIsLoading(true);
    axios
      .post("/api/register", {
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        password: data.password1,
        email: data.email,
      })
      .then(() => {
        signIn("credentials", { redirect: false }).then(() => {
          toast.success("حساب کاربری ایجاد شد");
          registerModal.onClose();
        });
      })
      .catch((error: any) => {
        toast.error("Internal Server Error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Modal
      isOpen={registerModal.isOpen}
      onChange={registerModal.onClose}
      title="ثبت نام"
      description=""
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 px-4"
      >
        <p></p>
        <Input
          {...register("firstname", { required: "این فیلد الزامی است" })}
          label="نام"
        />
        <Input
          {...register("lastname", { required: "این فیلد الزامی است" })}
          label="نام خانوادگی"
        />
        <Input
          label="ایمیل"
          type="email"
          {...register("email", { required: "ایمیل الزامی است" })}
        />
        <Input
          {...register("username", { required: "این فیلد الزامی است" })}
          label="نام کاربری"
        />
        <Input
          type="password"
          {...register("password1", { required: "این فیلد الزامی است" })}
          label="رمز عبور"
        />
        <Input
          type="password"
          {...register("password2", { required: "این فیلد الزامی است" })}
          label="تکرار رمز عبور"
        />
        <Button type="submit" className="bg-white text-black">
          ثبت نام
        </Button>
      </form>
      <div className=" flex items-center justify-center gap-x-2">
        <p className="underline underline-offset-2 cursor-pointer">وارد شوید</p>
        <p
          onClick={() => {
            registerModal.onClose();
            loginModal.onOpen();
          }}
        >
          حساب کاربری دارید ؟
        </p>
      </div>
    </Modal>
  );
};
export default RegisterModal;
