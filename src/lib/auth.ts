import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface InputValue {
  name?: string;
  email: string;
  password: string;
}

export const signIn = async (input: InputValue) => {
  // NextAuth signin

  if (input.name) {
    const user = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      },
    });

    return user;
  } else {
    return null;
  }
};
