import { seed } from './seed';
import { db } from './db';
import { eq } from 'drizzle-orm';
import { campaign } from './schema';

async function main() {
  const campaigns = await db.query.campaign.findMany({
    where: eq(campaign.active, true),
    with: {
      organization: true,
      owner: { columns: { name: true } },
    },
  });

  console.log('campaigns', campaigns);
  return campaigns;
}

// seed();
main();
