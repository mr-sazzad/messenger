import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, password } = body;

    if (!email || !name || !password) {
      throw new NextResponse("Missing Info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma?.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log("REGISTRATION_ERROR 🚀", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
