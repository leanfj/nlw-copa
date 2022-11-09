import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe.@gmail.com",
      avatarUrl: "https://github.com/leanfj.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Pool 1",
      code: "BOL1234",
      ownerId: user.id,
      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  /*   const participant = await prisma.participant.create({
    data: {
      userId: user.id,
      poolId: pool.id,
    },
  }); */

  await prisma.game.create({
    data: {
      date: "2022-11-06T00:30:03.333Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-10T00:30:03.333Z",
      firstTeamCountryCode: "FR",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,
          participant: {
            connect: {
              userId_poolId: { userId: user.id, poolId: pool.id },
            },
          },
        },
      },
    },
  });
}

main();
