import { db } from './db';
import {
  User,
  Organization,
  organization as organizationSchema,
  user as userSchema,
  campaign as campaignSchema,
} from './schema';

async function createUser() {
  const user = await db
    .insert(userSchema)
    .values({
      name: 'Bob',
      email: 'bob@google.com',
    })
    .returning();

  return user[0];
}

async function createOrg(user: User) {
  const org = await db
    .insert(organizationSchema)
    .values({
      ownerId: user.id,
      name: 'Google',
    })
    .returning();

  return org[0];
}

async function createCampaigns(user: User, organization: Organization) {
  const campaigns = await db
    .insert(campaignSchema)
    .values([
      {
        name: 'Campaign 1',
        organizationId: organization.id,
        ownerId: user.id,
      },
      {
        name: 'Campaign 2',
        organizationId: organization.id,
        ownerId: user.id,
      },
      {
        name: 'Campaign 3',
        organizationId: organization.id,
        ownerId: user.id,
      },
    ])
    .returning();

  return campaigns;
}

export async function seed() {
  const user = await createUser();
  const organization = await createOrg(user);
  const campaigns = await createCampaigns(user, organization);

  return { user, organization, campaigns };
}
