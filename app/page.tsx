import Image from "next/image";

const Home = () => {
  return (
    <div className="pt-20 flex px-5 flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col gap-y-8">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center">
          با اینجاست انبارتو مدیریت کن
        </h1>
        <p className="text-sm md:text-lg text-center">
          با اینجاست دیگه دغدغه گم کردن وسایلتون رو ندارید
          <br />
          کافیه تمام وسایلتون رو در سایت ثبت کنید و با اسکن کد روی جعبه محتویات
          اون رو مشاهده کنید
        </p>

        <Image
          src="/images/hero-img.png"
          alt="box"
          width={500}
          height={500}
          className="mx-auto w-[300px] md:w-[500px] h-auto"
        />
      </div>
    </div>
  );
};
export default Home;
