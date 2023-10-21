import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  // console.log(params.id);
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  // console.log(task);
  return NextResponse.json(task);
}

export async function PATCH(request, { params }) {
  const data = await request.json();
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: {
      ...data,
    },
  });
 // console.log(taskUpdated);
  return NextResponse.json(taskUpdated);
}

export async function DELETE(request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
   // console.log(taskRemoved);
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(
      "NO existen datos ... que quieres eliminar?" + error.message
    );
  }
}
