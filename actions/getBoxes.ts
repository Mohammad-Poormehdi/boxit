import authOptions from "@/helpers/auth";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";

const getBoxes = async () => {
  const session = await getServerSession(authOptions);
  const boxes = await prisma.box.findMany({
    where: { User: { email: session?.user?.email } },
  });
  return boxes;
};
export default getBoxes;
