import getBoxes from "@/actions/getBoxes";
import { getServerSession } from "next-auth";
import Button from "../components/Button";

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
    <div className="flex flex-col pt-20">
      <div className="max-w-5xl flex flex-col gap-y-4 mx-auto">
        {boxes.length === 0 && <h1>شما هیچ باکسی ندارید</h1>}
        <div>
          <Button>ساخت باکس جدید</Button>
        </div>
      </div>
    </div>
  );
};
export default Warehouses;
