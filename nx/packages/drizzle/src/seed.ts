import { db } from './db';
import { user as userSchema } from './schema';

async function createUser() {
  const user = await db.insert(userSchema).values({
    name: 'Bob',
    email: 'bob@google.com',
  });

  return user;
}

// async function createOrg(user: User) {
//   const org = await prisma.organization.create({
//     data: {
//       ownerId: user.id,
//       name: 'Google',
//     },
//   });

//   return org;
// }

// async function createCampaigns(user: User, organization: Organization) {
//   const campaigns = await prisma.campaign.createMany({
//     data: [
//       {
//         name: 'Campaign 1',
//         organizationId: organization.id,
//         ownerId: user.id,
//       },
//       {
//         name: 'Campaign 2',
//         organizationId: organization.id,
//         ownerId: user.id,
//       },
//       {
//         name: 'Campaign 3',
//         organizationId: organization.id,
//         ownerId: user.id,
//       },
//     ],
//     skipDuplicates: true,
//   });

//   return campaigns;
// }

export async function seed() {
  const user = await createUser();
  // const organization = await createOrg(user);
  // const campaigns = await createCampaigns(user, organization);

  // return { user, organization, campaigns };
  return { user };
}
