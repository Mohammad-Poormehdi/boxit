import getBoxes from "@/actions/getBoxes";
import { getServerSession } from "next-auth";
import PageClient from "./components/PageClient";
import BoxCard from "../components/BoxCard";

const Warehouses = async () => {
  const session = await getServerSession();
  const boxes = await getBoxes();

  if (!session) {
    return (
      <div className="flex flex-col items-center  justify-center pt-20">
        <h1 className="text-xl font-semibold">
          شما اجازه دسترسی به این صفحه را ندارید
        </h1>
      </div>
    );
  }

  return (
    <div className=" flex flex-col pt-20">
      <div className="w-full max-w-7xl px-5 flex flex-col gap-y-4 mx-auto">
        {boxes.length === 0 && <h1>شما هیچ باکسی ندارید</h1>}
        <PageClient />
        <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-4">
          {boxes.map((box) => (
            <BoxCard name={box.name} description={box.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Warehouses;
