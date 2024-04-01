import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

interface InputValues {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password }: InputValues = body;

    console.log("ima here");

    if (!name || !email || !password) {
      return NextResponse.json({
        message: "Missing fields",
      });
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return NextResponse.json({
        message: "User already exists",
      });
    }

    const hasedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hasedPassword,
      },
    });

    // Remove password from response
    user.password = "";

    return NextResponse.json({
      message: "User created successfully",
      user,
    });
  } catch (error: any) {
    console.log(error, "REGISTER_ERROR");
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
}
