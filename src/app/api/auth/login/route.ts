// import prisma from "@/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// interface InputValues {
//   email: string;
//   password: string;
// }

// export async function POST(request: NextRequest) {
//   const body = await request.json();

//   const { email, password }: InputValues = body;

//   if (!email || !password) {
//     return
//     );
//   }

//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   if (!user) {
//   }
// }
