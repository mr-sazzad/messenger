import getCurrentUser from "@/app/actions/getCurrentUsr";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUsr = await getCurrentUser();
    const body = await request.json();

    const { userId, isGroup, members, name } = body;

    if (!currentUsr?.id || !currentUsr?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (isGroup && (!members || members.length < 2 || !name)) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    if (isGroup) {
      const newConversation = await prisma?.conversation.create({
        data: {
          name,
          isGroup,
          users: {
            connect: [
              ...members.map((member: { value: string }) => ({
                id: member.value,
              })),
              {
                id: currentUsr.id,
              },
            ],
          },
        },
        include: {
          users: true,
        },
      });

      return NextResponse.json(newConversation);
    }

    const existingConversations = await prisma.conversation.findMany({
      where: {
        OR: [
          {
            userIds: {
              equals: [currentUsr.id, userId],
            },
          },
          {
            userIds: {
              equals: [userId, currentUsr.id],
            },
          },
        ],
      },
    });

    const singleConversation = existingConversations[0];

    if (singleConversation) {
      return NextResponse.json(singleConversation);
    }

    const newConversation = await prisma.conversation.create({
      data: {
        users: {
          connect: [
            {
              id: currentUsr.id,
            },
            {
              id: userId,
            },
          ],
        },
      },
      include: {
        users: true,
      },
    });

    return NextResponse.json(newConversation);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
