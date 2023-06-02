import { prisma } from './db';
import { seed } from './seed';

async function main() {
  const campaigns = await prisma.campaign.findMany({
    where: { active: { equals: true } },
    include: {
      organization: { select: { name: true } },
      owner: { select: { name: true } },
    },
  });

  console.log('campaigns', campaigns);
  return campaigns;
}

seed();
// main();
