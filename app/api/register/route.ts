import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firtsname, lastname, username, password, email } = body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        username: username,
        name: firtsname + " " + lastname,
        hashedPassword: hashedPassword,
        email: email,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
