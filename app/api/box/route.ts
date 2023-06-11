import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import authOptions from "@/helpers/auth";
import getUser from "@/actions/getUser";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description } = body;
    const session = getServerSession(authOptions);
    const user = await getUser();
    if (!user) {
      return NextResponse.json("you are not logged in", { status: 403 });
    }
    const box = await prisma.box.create({
      data: { name, description, userId: user.id },
    });
    return NextResponse.json(box, { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
