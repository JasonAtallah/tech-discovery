import { InferModel } from 'drizzle-orm';
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
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
  },
  (table) => {
    return {
      emailIndex: uniqueIndex('User_email_index').on(table.email),
    };
  }
);

export type User = InferModel<typeof user>; // return type when queried
export type NewUser = InferModel<typeof user, 'insert'>; // insert type

export const organization = pgTable(
  'Organization',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    ownerId: integer('ownerId').references(() => user.id),
  },
  (table) => {
    return {
      ownerIdIndex: index('Organization_ownerId_index').on(table.ownerId),
    };
  }
);

export type Organization = InferModel<typeof organization>; // return type when queried
export type NewOrganization = InferModel<typeof organization, 'insert'>; // insert type

export const campaign = pgTable(
  'Campaign',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    active: boolean('active').default(true).notNull(),
    organizationId: integer('organizationId').references(() => organization.id),
    ownerId: integer('ownerId').references(() => user.id),
  },
  (table) => {
    return {
      organizationIdIndex: index('Campaign_organizationId_index').on(
        table.organizationId
      ),
      ownerIdIndex: index('Campaign_ownerId_index').on(table.ownerId),
    };
  }
);

export type Campaign = InferModel<typeof campaign>; // return type when queried
export type NewCampaign = InferModel<typeof campaign, 'insert'>; // insert type
