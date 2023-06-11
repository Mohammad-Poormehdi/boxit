import authOptions from "@/helpers/auth";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import getUser from "./getUser";
import { NextResponse } from "next/server";

const getBoxes = async () => {
  const session = await getServerSession(authOptions);
  const user = await getUser();
  if (!user) {
    return []
  }
  const boxes = await prisma.box.findMany({
    where: { userId: user?.id },
  });
  return boxes;
};
export default getBoxes;
