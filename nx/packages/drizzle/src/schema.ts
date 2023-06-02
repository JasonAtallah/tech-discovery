import { InferModel, relations } from 'drizzle-orm';
import {
  boolean,
  index,
  integer,
  pgTable,
  serial,
  text,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const user = pgTable(
  'User',
  {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
  },
  (table) => {
    return {
      emailIdx: uniqueIndex('User_email_index').on(table.email),
    };
  }
);

export const userRelations = relations(user, ({ many }) => ({
  organizationsOwned: many(organization),
  campaignsOwned: many(campaign),
}));

export type User = InferModel<typeof user>; // return type when queried
export type NewUser = InferModel<typeof user, 'insert'>; // insert type

export const organization = pgTable(
  'Organization',
  {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    ownerId: integer('ownerId').references(() => user.id),
  },
  (table) => {
    return {
      ownerIdIdx: index('Organization_ownerId_index').on(table.ownerId),
    };
  }
);

export const organizationRelations = relations(
  organization,
  ({ one, many }) => ({
    owner: one(user, {
      fields: [organization.ownerId],
      references: [user.id],
    }),
    campaigns: many(campaign),
  })
);

export type Organization = InferModel<typeof organization>; // return type when queried
export type NewOrganization = InferModel<typeof organization, 'insert'>; // insert type

export const campaign = pgTable(
  'Campaign',
  {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    active: boolean('active').default(true).notNull(),
    organizationId: integer('organizationId').references(() => organization.id),
    ownerId: integer('ownerId').references(() => user.id),
  },
  (table) => {
    return {
      organizationIdIdx: index('Campaign_organizationId_index').on(
        table.organizationId
      ),
      ownerIdIdx: index('Campaign_ownerId_index').on(table.ownerId),
    };
  }
);

export const campaignRelations = relations(campaign, ({ one }) => ({
  owner: one(user, {
    fields: [campaign.ownerId],
    references: [user.id],
  }),
  organization: one(organization, {
    fields: [campaign.organizationId],
    references: [organization.id],
  }),
}));

export type Campaign = InferModel<typeof campaign>; // return type when queried
export type NewCampaign = InferModel<typeof campaign, 'insert'>; // insert type
